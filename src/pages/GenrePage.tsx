import {useParams, useNavigate} from "react-router-dom";
import {Preloader} from "../components/preloader/Preloader.tsx";
import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {movieActions} from "../redux/slices/movie-slice/movieSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useLoadingClearParams} from "../hooks/useLoadingClearParams.ts";
import {useEffect} from "react";

export const GenrePage = () => {
    const {genreId = '0'} = useParams();
    const navigate = useNavigate();
    const genreName = useAppSelector(state => state.genreStore.genresMap[+genreId]);
    const {isLoading, params} = useLoadingClearParams({clearParams: ['query'], extraParams: {with_genres: genreId}});

    useEffect(() => {
        if (!genreName && !isLoading) {
            navigate('/movies');
        }
    }, [genreName, isLoading, navigate]);

    if (!genreName && !isLoading) {
        return null;
    }

    return (
        <>
            {isLoading ? <Preloader/> : <MoviesList params={params} action={movieActions.loadMovies} title={genreName + ' movies'}/>}
        </>
    );
};
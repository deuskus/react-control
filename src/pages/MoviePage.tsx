import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {MovieInfo} from "../components/movie-info/MovieInfo.tsx";

export const MoviePage: FC = () => {
    const {movieId} = useParams();
    const favorites = useAppSelector(state => state.favoritesStore.movies);
    const movie = favorites.find(m => m.id === Number(movieId));

    if (!movie) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center text-gray-500 text-xl">
                    Movie not found
                </div>
            </div>
        );
    }

    return <MovieInfo movie={movie} />;
}; 
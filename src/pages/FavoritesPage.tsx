import {FC} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {MoviesListCard} from "../components/movies-list-card/MoviesListCard.tsx";
import Masonry from "react-layout-masonry";
import {useNavigate} from "react-router-dom";

export const FavoritesPage: FC = () => {
    const favorites = useAppSelector(state => state.favoritesStore.movies);
    const navigate = useNavigate();

    const handleMovieSelect = (movieId: number) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Favorites</h1>
            {favorites.length === 0 ? (
                <div className="text-center text-gray-500 text-xl">
                    No favorite movies yet. Add some movies to your favorites!
                </div>
            ) : (
                <Masonry
                    columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4 }}
                    gap={16}
                    className="w-full"
                >
                    {favorites.map(movie => (
                        <MoviesListCard 
                            key={movie.id} 
                            movie={movie} 
                            onSelect={() => handleMovieSelect(movie.id)}
                        />
                    ))}
                </Masonry>
            )}
        </div>
    );
}; 
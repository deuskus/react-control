import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movie-slice/movieSlice.ts";
import {genreSlice} from "./slices/genre-slice/genreSlice.ts";
import {userSlice} from "./slices/user-slice/userSlice.ts";
import {favoritesReducer} from "./slices/favorites-slice/favoritesSlice.ts";

export const store = configureStore({
    reducer: {
        movieStore: movieSlice.reducer,
        genreStore: genreSlice.reducer,
        userStore: userSlice.reducer,
        favoritesStore: favoritesReducer
    }
})
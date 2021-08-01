// Actions are just a way to tell redux store that hey! i want to change something
// or simple a javascrpti object


// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'


// Action creators
export function addMovies (movies) {

    return {

        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie) {

    return {

        type: ADD_TO_FAVOURITES,
        movie
    }

}

export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    };
}


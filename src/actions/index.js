// Actions are just a way to tell redux store that hey! i want to change something
// or simple a javascrpti object


// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

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


export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    };
}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    };
}

export function handleMovieSearch (movie) {
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=3e91f29e&t=${movie}`;

    return function (dispatch) {
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie', movie);
        })
    }
    
}
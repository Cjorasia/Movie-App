// Actions are just a way to tell redux store that hey! i want to change something
// or simple a javascrpti object


// Action types
export const ADD_MOVIES = "ADD_MOVIES";


// Action creators
export function addMovies (movies) {

    return {

        type: ADD_MOVIES,
        movies
    }
}
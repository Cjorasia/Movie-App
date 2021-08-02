import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state =initialMoviesState, action){

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }

        case REMOVE_FROM_FAVOURITES:
            const filterdArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return {
                ...state,
                favourites: filterdArray
            };

        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }

        default: 
            return state;
    }
}

const initialSeachState = {
    result: {}
};

export function search (state = initialSeachState, action){
    return state;
}


// Will pass rootReducer to Store method as it only takes one reducer

const initialRootState = {
    movies: initialMoviesState,
    search: initialSeachState
};

// Called everty time action is dispatched
export default function rootReducer (state= initialRootState, action) {
    return {
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}
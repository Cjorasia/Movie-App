import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export default function movies(state =initialMoviesState, action){

//     if(action.type ===  ADD_MOVIES ){
//         // return new state, cannot modify
//         return {
//             ...state,
//             list: action.movies
//         }; 
//     }

//     return state;

// BETTER USE SWITCH

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
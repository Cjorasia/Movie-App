export default movies(state =[], action){

    if(action.type === 'ADD_MOVIES' ){
        return action.movies; // return new state, cannot modify
    }

    return state;
} 
// Package import
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

// File import
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

// logger (obj)(next)(action) --> currying Function
const logger = ({ dispatch, getState }) => (next) => (action) => {
    // console.log('ACTION_TYPE =', action.type);
    next(action);
}

const thunk = ({dispatch, getState}) => (next) => (action) => {
    if (typeof action === 'function'){
        action(dispatch);
        return;
    }
    next(action);
}


// Creating redux store
const store = createStore(rootReducer, applyMiddleware(logger,thunk));

console.log("store", store);

ReactDOM.render(<App store={store} />, document.getElementById("root"));

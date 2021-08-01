// Package import
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';

// File import
import "./index.css";
import App from "./components/App";
import movies from './reducers';

// Creating redux store
const store = createStore(movies);
console.log("store", store);

ReactDOM.render(<App store={store} />, document.getElementById("root"));

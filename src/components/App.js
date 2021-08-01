import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from '../actions';

class App extends React.Component {

  componentDidMount() {
    // make API call
    // dispatch action
    const { store } = this.props;

    // Subscription called after dispatch
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate(); // Never use this method
    });

    // Dispatch an action
    store.dispatch(addMovies(data));

    console.log('STATE', this.props.store.getState());
  }

  render() {
    const movies = this.props.store.getState(); // getting movies from store

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {data.map((movie, index) => (
              <MovieCard movie={movie} key={`movie -${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

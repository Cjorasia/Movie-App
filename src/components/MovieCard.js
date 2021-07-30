import React from "react";

class MovieCard extends React.Component {

  render(){
    const {movie} = this.props;
    return(
      <div className="movie-card">
        <div className="left"></div>
            <img alt="movie-poster" src = {movie.Poster}/>
        <div className="right">
            <div className = "title">{movie.Title}</div>
            <div className = "plot">{movie.Plot}</div>
            <div className = "footer">
                <div className="Rating">{movie.imbdRating}</div>
                <button className="favourite-btn">Favourite</button>
            </div>
        </div>
      </div>
    ); 
  }
}

export default MovieCard;
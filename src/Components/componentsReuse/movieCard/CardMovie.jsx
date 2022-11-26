import React from 'react'
import MovieControls from './movieControl/MovieControls';
import "allStyleFile/CardMovie.scss";

const CardMovie = ({movie, type}) => {
  return (
    <div className='main-cardMovie' >
      {movie.Poster ? (
        <div className="img">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ) : (
        <div className="title">{movie.Title}</div>
      )}
      <MovieControls type={type} movie={movie} />
    </div>
  );
}

export default CardMovie
import * as actions from "myContext/actions/action";
import { useMovieContent } from "myContext/ContextCom";
import React from "react";

const Card = ({ movie }) => {
  const movieContext = useMovieContent();

  const watchListDisabled = movieContext.watchList.find(
    (mov) => mov.imdbID === movie.imdbID
  );

  const watchedDisabled = movieContext.watched.find(
    (mov) => mov.imdbID === movie.imdbID
  );

  const checkWatchList = watchListDisabled
    ? true
    : watchedDisabled
    ? true
    : false;
  const checkWatched = watchedDisabled ? true : false;

  return (
    <>
      <div className="img">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div>This Movie Not Contain Image</div>
        )}
      </div>
      <div className="text">
        <div className="title">{movie.Title}</div>
        <span>{movie.Year}</span>
        <div className="buttons">
          <button
            onClick={() =>
              movieContext.movDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            disabled={checkWatchList}
            className="watchList"
          >
            WatchList
          </button>
          <button
            onClick={() =>
              movieContext.movDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            disabled={checkWatched}
            className="watched"
          >
            Watched
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

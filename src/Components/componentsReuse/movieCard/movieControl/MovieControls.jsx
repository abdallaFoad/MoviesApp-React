import React from 'react';
import { useMovieContent } from '../../../context/ContextCom';
import * as actions from "../../../context/actions/action"; 
import "../../../../style/MovieControls.scss";

const MovieControls = ({ movie, type }) => {
  const listContext = useMovieContent();

  return (
    <div className="controls">
      {type === "watchList" && (
        <div className="btns">
          <button
            onClick={() =>
              listContext.movDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye" />
          </button>
          <button
            onClick={() =>
              listContext.movDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </div>
      )}
      {type === "watched" && (
        <div className="btns">
          <button
            onClick={() =>
              listContext.movDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye-slash" />
          </button>
          <button
            onClick={() =>
              listContext.movDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie,
              })
            }
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieControls;
import React from 'react';
import styled from 'styled-components';
import theme from 'mainStyled/config';
import { useMovieContent } from 'myContext/ContextCom';
import * as actions from "myContext/actions/action"; 


const MovieControls = ({ movie, type }) => {
  const listContext = useMovieContent();

  return (
    <Controls className="controls">
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
    </Controls>
  );
}

const Controls = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  transition: ${theme.transition};
  .btns {
    button {
      transition: ${theme.transition};
      background-color: #0d110ebc;
      color: ${theme.yellow};
      font-size: 1.2rem;
      padding: 0.5rem;
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: 50%;
      :hover {
        color: ${theme.white};
      }
    }
  }
`;

export default MovieControls
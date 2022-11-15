import React from 'react'
import styled from 'styled-components';
import theme from 'mainStyled/config';
import MovieControls from './movieControl/MovieControls';


const CardMovie = ({movie, type}) => {
  return (
    <Card >
      {movie.Poster ? (
        <div className="img">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ) : (
        <div className="title">{movie.Title}</div>
      )}
      <MovieControls type={type} movie={movie} />
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  .img {
    border-radius: 6px;
    cursor: pointer;
    overflow: hidden;
    :hover img {
      transform: scale(1.1) rotate(-1deg);
    }
    img {
      transition: ${theme.transition};
      width: 100%;
      border-radius: 6px;
    }
  }
  :hover .controls {
    display: block;
  }
`;
export default CardMovie
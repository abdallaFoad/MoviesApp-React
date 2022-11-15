import React from "react";
import styled from "styled-components";
import { useMovieContent } from "myContext/ContextCom";
import CardMovie from "../componentsReuse/movieCard/CardMovie";
import theme from "mainStyled/config";

export default function Watched() {
  const watchListContext = useMovieContent();

  return (
    <Section>
      <div className="container">
        <div className="head">
          <h1>Your Watched</h1>
          {watchListContext.watched.length > 0 ? (
            <span>
              <span>{watchListContext.watched.length}</span> Movies
            </span>
          ) : (
            <span>No Movies</span>
          )}
        </div>
        {watchListContext.watched.length > 0 ? (
          <div className="content">
            {watchListContext.watched.map((movie) => {
              return (
                <CardMovie movie={movie} key={movie.imdbID} type="watched" />
              );
            })}
          </div>
        ) : (
          <h2>No Movies in your list, add some!</h2>
        )}
      </div>
    </Section>
  );
}

const Section = styled.div`
  padding: 1rem 3rem;
  .container {
    width: 100%;
    margin-top: 4rem;
    .head {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 2rem 0;
      h1 {
        color: ${theme.secondary};
      }
      span {
        color: ${theme.red};
        font-size: 1.2rem;
        font-weight: 700;
        span {
          color: ${theme.yellow};
        }
      }
    }
    .content {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 2rem;
      align-items: flex-start;
      justify-content: center;
    }
    h2 {
      margin: 2rem auto;
      width: 100%;
      text-align: center;
      color: #999;
      font-size: 3rem;
      font-weight: 500;
    }
  }
`;

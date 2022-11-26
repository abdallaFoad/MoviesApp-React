import React from "react";
import { useMovieContent } from "../context/ContextCom";
import CardMovie from "../componentsReuse/movieCard/CardMovie";
import "allStyleFile/Watched.scss";
import Button from "../../sections/Button";

export default function Watched() {
  const watchListContext = useMovieContent();

  return (
    <div className="main-watched">
      <div className="container">
        <div className="btn">
          <Button content="Your Watched List" />
        </div>
        <div className="head">
          <div className="desc">
            <span>Your</span> Watched List
            <p>
              <span>Lorem ipsum dolor,</span>
              <br /> <span>sit amet consectetur</span> <br /> adipisicing elit.
            </p>
          </div>
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
    </div>
  );
}

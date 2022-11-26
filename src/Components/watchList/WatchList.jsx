import React from "react";
import { useMovieContent } from "../context/ContextCom";
import CardMovie from "../componentsReuse/movieCard/CardMovie";
import "allStyleFile/WatchList.scss";
import Button from "../../sections/Button";

export default function WatchList() {
  const watchListContext = useMovieContent();

  return (
    <div className="main-watchList">
      <div className="container">
        <div className="btn">
          <Button content="Your WatchList" />
        </div>
        <div className="head">
          <div className="desc">
            <span>Your</span> WatchList
            <p>
              <span>Lorem ipsum dolor,</span>
              <br /> <span>sit amet consectetur</span> <br /> adipisicing elit.
            </p>
          </div>
          {watchListContext.watchList.length > 0 ? (
            <span>
              <span>{watchListContext.watchList.length}</span> Movies
            </span>
          ) : (
            <span>No Movies</span>
          )}
        </div>
        {watchListContext.watchList.length > 0 ? (
          <div className="content">
            {watchListContext.watchList.map((movie) => {
              return (
                <CardMovie movie={movie} key={movie.imdbID} type="watchList" />
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

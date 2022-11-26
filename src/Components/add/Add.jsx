import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from './cardFilm/Card';
import "allStyleFile/Add.scss";

const Add = () => {
  const [val, setVal] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${val}&apikey=b912e3b5`)
      .then((res) => setMovies(res.data.Search))
      .catch((error) => console.log(error))
  }, [val]);
  
  return (
    <div className="main-add">
      <div className="container">
        <div className="content">
          <h1>
            Search Your <br /> <span>Movie...</span> <br /> Enjoy Now!
          </h1>
          <div className="input">
            <input
              type="text"
              value={val}
              placeholder="Search for a movie"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Search for a movie")}
              onChange={(e) => setVal(e.target.value)}
            />
          </div>

          {movies && (
            <ul>
              {movies.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    <Card movie={movie} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default Add;
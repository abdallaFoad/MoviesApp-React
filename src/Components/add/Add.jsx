import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import theme from '../config';
import axios from 'axios';
import Card from './cardFilm/Card';


const Add = () => {
  const [val, setVal] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${val}&apikey=b912e3b5`)
      .then((res) => setMovies(res.data.Search))
      .catch((error) => console.log(error))
  }, [val]);
  return (
    <Section>
      <div className="container">
        <div className="content">
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
            {
              movies.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    <Card movie={movie} />
                  </li>
                );
              })
            }
          </ul>
          )}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  padding: 3rem 0;
  .container {
    width: 90%;
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      .input {
        margin-top:3rem;
        width: 100%;
        display: flex;
        align-items: center;
        input {
          margin: auto;
          width: 80%;
          padding: 0.7rem 1rem;
          font-size: 1.2rem;
          background-color: ${theme.secondary};
          color: white;
          border: none;
          :focus {
            outline: none;
          }
          ::placeholder {
            color: white;
            font-family: "Dosis", sans-serif;
            font-weight: 700;
            letter-spacing: 2px;
            word-spacing: 3px;
          }
        }
      }
      ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        margin-top: 5rem;
        gap: 2rem;
        li {
          max-height: 600px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;
          padding: 1rem;
          border-radius: 6px;
          box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
          .img {
            border-radius: 6px;
            overflow: hidden;
            cursor: pointer;
            img {
              border-radius: 6px;
              width: 100%;
            }
          }
          .text {
            width: 100%;
            .title {
              font-size: 1.2rem;
              font-weight: bold;
            }
            span {
              font-weight: bold;
            }
            .buttons {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 0.6rem;
              margin: 1.5rem 0;
              button {
                cursor: pointer;
                padding: 0.5rem;
                border: none;
                outline: none;
                background-color: ${theme.secondary};
                color: white;
                border-radius: 6px;
                font-size: 1.2rem;
                transition: ${theme.transition};
                :hover {
                  color: white;
                  background-color: ${theme.blackColor};
                }
                :disabled{
                  background-color: #00000037;
                  color:#777;
                  cursor:no-drop
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default Add;




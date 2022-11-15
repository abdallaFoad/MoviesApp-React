import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'mainStyled/config';


export default function Navbar() {
  return (
    <Section>
      <div className="container">
        <div className="logo">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? `${theme.white}` : "" };
            }}
            to="/"
          >
            Movea
          </NavLink>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? `${theme.white}` : "" };
                }}
                to="watchList"
              >
                Watch List
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? `${theme.white}` : "" };
                }}
                to="watched"
              >
                Watched
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? `${theme.white}` : "",
                    backgroundColor: isActive ? `${theme.yellow}` : "",
                  };
                }}
                to="add"
              >
                Add
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: fixed;
  z-index: 333;
  background-color: ${theme.blackColor};
  color: ${theme.white};
  width: 100%;
  height: 70px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    .logo a {
      color: ${theme.yellow};
      font-size: 1.2rem;
      text-transform: uppercase;
      font-family: "Dosis", sans-serif;
      font-weight: 800;
      letter-spacing: 2px;
      transition: ${theme.transition};
      :hover {
        color: ${theme.yellow};
      }
    }
    .links ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2rem;
      li {
        cursor: pointer;
        :last-of-type {
          border-radius: 6px;
          background-color: black;
          text-transform: uppercase;
          width: 70px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          :hover {
            background-color: #886a6a;
            a {
              color: ${theme.yellow};
            }
          }
          a {
            border-radius: 6px;
            color: ${theme.white};
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }
        a {
          color: #777;
          font-size: 1.2rem;
          transition: ${theme.transition};
          :hover {
            color: ${theme.white};
          }
        }
      }
    }
  }
`;
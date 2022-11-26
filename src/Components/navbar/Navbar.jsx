import React from "react";
import "allStyleFile/Navbar.scss";
import "allStyleFile/configStyle.scss";
import { NavLink } from "react-router-dom";
import img from "../../assets/logo.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const existActive = () => {
    setActive(!active);
  };

  const activeToggle = ({isActive}) => {
    return {
      color: isActive ? "#e5f92c" : "",
      fontSize: isActive ? "1.1rem" : "",
      fontWeight: isActive ? '800' : '',
    };
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className={`content-container ${active === true ? "active" : ""}`}>
          <div className="logo">
            <NavLink to="/" className="imgLogo">
              <img src={img} alt="logoImg" />
            </NavLink>
            <div className="toggleIcon">
              {!active ? (
                <AiOutlineMenu onClick={existActive} />
              ) : (
                <HiXMark onClick={existActive} />
              )}
            </div>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink style={activeToggle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={activeToggle} to="services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink style={activeToggle} to="gallery">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink style={activeToggle} to="blogs">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink style={activeToggle} to="contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink style={activeToggle} to="watched">
                  Watched
                </NavLink>
              </li>
              <li>
                <NavLink style={activeToggle} to="watchList">
                  List
                </NavLink>
              </li>
              <li>
                <NavLink style={activeToggle} to="add">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

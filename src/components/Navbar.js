import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full transition-opacity duration-500 z-50 main-nav">
        {/* 1st logo part  */}
        <img className=" LogoImg" src="logoimg.png" alt="LogoImg"></img>

        <div className="logo">
          <h2>FINOVATECH.IO</h2>
        </div>

        {/* 2nd menu part  */}
        <div className={"menu-link"}>
          <ul>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/vision">Vision</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink className="logIn">
                <img
                  className="LogImg"
                  src="userLOGO.png"
                  alt="LoginImage"
                ></img>
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navButton">
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

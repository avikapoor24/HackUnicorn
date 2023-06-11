import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          
          <h2>
           FINOVATECH.IO
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div className={"menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/service">Vision</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About Us</NavLink>
            </li>
            <li>           
              <NavLink to="/#" className="logIn">Log In</NavLink>
            </li>
            <li>
            
              <button className="navButton">Get Started</button>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
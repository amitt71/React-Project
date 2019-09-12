import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-materialize";
import "../css/bootstrap/bootstrap.css";
const Nav = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#ff5733"
  };
  return (
    <Navbar
      className="transparent black-text"
      activeStyle={activeStyle}
      brand={
        <div className="col-11 col-xl-2">
          <h5 className="mb-0">
            <a href="/" className="text-white h2 mb-0">
              Scout<span className="text-primary">AI</span>
            </a>
          </h5>
        </div>
      }
      centerLogo
      alignLinks="left"
    >
      <NavLink to="/home" activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/england" activeStyle={activeStyle}>
        England
      </NavLink>
      <NavLink to="/spain" activeStyle={activeStyle}>
        Spain
      </NavLink>
      <NavLink to="/italy" activeStyle={activeStyle}>
        Italy
      </NavLink>
      <NavLink to="/germany" activeStyle={activeStyle}>
        Germany
      </NavLink>
      <NavLink to="/aboutMe" activeStyle={activeStyle}>
        About Me
      </NavLink>
    </Navbar>
  );
};

export default Nav;

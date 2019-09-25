import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, SideNavItem, SideNav } from "react-materialize";
import "../css/bootstrap/bootstrap.css";

const Nav = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#ff5733"
  };

  return (
    <div className="nav-wrapper">
      <div className="navbar-fixed">
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
          fixed={true}
          centerLogo
          alignLinks="left"
        >
          <ul className="sidenav-trigger" id="mobile-demo">
            <li>
              <NavLink to="/home" activeStyle={activeStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/england" activeStyle={activeStyle}>
                England
              </NavLink>
            </li>
            <li>
              <NavLink to="/spain" activeStyle={activeStyle}>
                Spain
              </NavLink>
            </li>
            <li>
              <NavLink to="/italy" activeStyle={activeStyle}>
                Italy
              </NavLink>
            </li>
            <li>
              <NavLink to="/germany" activeStyle={activeStyle}>
                Germany
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutMe" activeStyle={activeStyle}>
                About Me
              </NavLink>
            </li>
          </ul>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;

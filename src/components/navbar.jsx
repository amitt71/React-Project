import React from "react";
import { NavLink } from "react-router-dom";
import "bootswatch/dist/journal/_variables.scss";
import "bootswatch/dist/journal/_bootswatch.scss";
import "bootswatch/dist/journal/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ padding: "1%" }}
    >
      <NavLink className="navbar-brand" to="/">
        Bet AI
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/england">
              England
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/spain">
              Spain
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/italy">
              Italy
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="germany">
              Germany
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

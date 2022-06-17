import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
      // html5 header is like a div here
      <header>
        <h1>Crypto Dash App</h1>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <span> | </span>
        <NavLink className="nav-link" to="/api/prediction"> 
          Add a new Prediction
        </NavLink>
      </header>
    );
  }
  
  export default Header;
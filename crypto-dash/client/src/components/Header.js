import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    // html5 header is like a div here
    <header>
      <h1>Crypto Dash App</h1>
      <Link to="/">Home</Link>
      <span> | </span>
      <NavLink className="nav-link" to="/new">
        Add a new Prediction
      </NavLink>
    </header>
  );
}

export default Header;

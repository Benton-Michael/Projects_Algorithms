import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Button from '@mui/material/Button';

function Header() {
  return (
    // html5 header is like a div here
    <header>
      <h1>Cryptocurrency Dashboard</h1>
      <NavLink to="/">Home</NavLink>
      <span> | </span>
      <NavLink to="/new">Add Prediction</NavLink>
      <span> | </span>
      <NavLink to="/coinData">View Coin Data</NavLink>
    </header>
  );
}

export default Header;

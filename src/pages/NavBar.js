import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

// to display the Navigation on the screen
export const NavBar = () => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/About-Us">About-Us</Link>
      <Link to="/Contactus">Contactus</Link>
    </div>
  );
};

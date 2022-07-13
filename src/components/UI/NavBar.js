import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";

export const NavBar = () => {
  // TO DISPLAY THE NAVIGATION ON THE SCREEN..
  return (
    <div className="Nav-bar">
      <div className="Nav-bar-link">
        <Link to="/" className="Nav-bar-links">Home</Link>
        <Link to="/About-Us" className="Nav-bar-links">About-Us</Link>
        <Link to="/Contactus" className="Nav-bar-links">Contactus</Link>
      </div>
    </div>
  );
};

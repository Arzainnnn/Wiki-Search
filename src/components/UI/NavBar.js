import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";

export const NavBar = () => {
  // TO DISPLAY THE NAVIGATION ON THE SCREEN..
  return (
    <div className="Nav-bar">
      <div className="Nav-bar-link">
        <Link to="/">Home</Link>
        <Link to="/About-Us">About-Us</Link>
        <Link to="/Contactus">Contactus</Link>
      </div>
    </div>
  );
};

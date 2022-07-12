import React from "react";
import { Link } from "react-router-dom";
import { Backarrow } from "./Backarrow";
import "../../styles/Header.css";
import "../../styles/About.css";

export const Header = ({ title }) => { // DYNAMICALLY PASSING THE TITLES..
  return (
    <div className="Allheader">
      <h4 className="titling">{title}</h4> 
      <Link to="/">
        <Backarrow />
      </Link>
    </div>
  );
};

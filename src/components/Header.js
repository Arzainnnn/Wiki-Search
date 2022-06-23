import React from "react";
// import { useLocation, Link } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import { Backarrow } from "./Backarrow";
import "../styles/Header.css";
import "../styles/About.css";

export const Header = ({title}) => {
  const location = useLocation();

  return (
    <div>
      <Link to="/" className="link" state={location.state}>
        <div className="Header">
          <h4 className="routings">{title}</h4>
          <Backarrow />
        </div>
      </Link>
    </div>
  );
};

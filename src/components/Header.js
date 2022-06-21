import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Backarrow } from "./Backarrow";
// import "../styles/About.css";

export const Header = () => {
  const location = useLocation();

  return (
    <div>
      <Link to="/" className="link" state={location.state}>
        <div className="ContactHeader">
          <Backarrow />
        </div>
      </Link>
    </div>
  );
};

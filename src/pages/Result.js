import { useParams, useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Backarrow } from "../components/Backarrow";
import "../styles/Backarrow.css";
import "../styles/Result.css";

export const Result = () => {
  const location = useLocation();
  const [pageRes, setPageRes] = useState("Loading.....");
  const { pageid, title } = useParams();
  useEffect(() => {
    const getPageData = async () => {
      let pageRes = await fetch(
        `http://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext=&titles=${title}&origin=*&format=json`
      );
      pageRes = await pageRes.json();
      pageRes = pageRes.query.pages[pageid].extract;
      setPageRes(pageRes);
    };
    getPageData();
  }, []);
  return (
    <>
      <div className="gobackheader">
        <div className="Titles">{title}</div>
        <Link to="/" state={location.state}>
          <Backarrow />
        </Link>
      </div>

      <p className="pagedata">{pageRes}</p>
    </>
  );
};

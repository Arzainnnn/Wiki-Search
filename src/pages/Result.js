import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../App";
import { Backarrow } from "../components/UI/Backarrow";
import { Loading } from "../components/UI/Loading";
import "../styles/Backarrow.css";
import "../styles/Result.css";

export const Result = () => {
  const [DataResults, setSearchResults] = useContext(AppContext); // USING GLOBAL STATE WHICH WAS CREATED IN App.js(2)
  const [error, setError] = useState(null); // ERROR HANDLING DONE HERE..
  const [pageRes, setPageRes] = useState(); // EXTRACTING OF DATA BASED ON (pageid).. 
    const [isLoading, setisLoading] = useState(false); // THIS WILL SHOW THE LOADER UNTIL FETCHING OF DATA GETS COMPLETED..
  const { pageid, title } = useParams();

  // ======================================DATA EXTRACTION FROM THE API using useEffect to Handle the side Effect of the execution =========================================================
  useEffect(() => {
    const getPageData = async () => {
      setisLoading(true);
      setError(null);
      try {
        let pageRes = await fetch(
          `http://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext=&titles=${title}&origin=*&format=json`
        );
        console.log(pageRes);
        if (!pageRes.ok) {
          console.log("called");
          throw new Error("Something went wrong!");
        }
        pageRes = await pageRes.json();
        pageRes = pageRes.query.pages[pageid].extract;
        setPageRes(pageRes);
      } catch (error) {
        setError(error.message);
      }
      setisLoading(false);
    };
    getPageData();
  }, []); //===EMPTY [] DEPENDENCIES REPRESENTS THAT THERE IS NOT NEED OF RE-RENDERING..
  // =======================================================================================================================================================================================

  return (
    // returns JSX Code..
    <>
      <div className="Allheader">
        <div className="Titles">{title}</div>
        {/*DYNAMICALLY INJECTING THE TITLE*/}
        <Link to="/">
          <Backarrow /> {/*GO BACK TO HOME */}
        </Link>
      </div>
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && <p className="pagedata">{pageRes}</p>} {/*WHERE THE EXTRACTED DATA IS BEEN DISPLAYED*/}
      {isLoading && <Loading />}
    </>
  );
};

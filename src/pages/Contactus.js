import React, { useState } from "react";
import { Header } from "../components/UI/Header";
import { Queryform } from "../components/form/Queryform";
import "../styles/Contactus.css";

export const Contactus = () => {
  const [submittedData, setSubmittedData] = useState({});

  const storeSubmittedData = (kkey, value) => {
    setSubmittedData({ ...submittedData, [kkey]: value });
  };

  const handlequery = (event) => {
    event.preventDefault();
    alert("You have submitted the Query Will get back to you soon.");
    console.log(submittedData);
  };

  return (
    <>
      <Header title={"Contact us"} />
      <Queryform
        queryresponseHandler={handlequery}
        handleDataChange={storeSubmittedData}
      />
    </>
  );
};

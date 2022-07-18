import React, { forwardRef } from "react";
import '../../styles/Form.css';
import '../../styles/Mode.css';

export const Form = forwardRef((props, ref) => {
  // FROM HERE WE ARE FORWARDING ref={ref} WHICH CONTAINS VALUE..
// const ApplyValidation =props.SearchValid ?   "search-Box" : "validationcheck"
  return (
    <form onSubmit={props.response}>
      <div className="Allheader">

        <input
          // className={ApplyValidation}
          className="search-Box"
          placeholder="Search Article..."
          ref={ref} // PLACE WHERE VALUE IS STORED..
          type="text"
          pattern="[A-Za-z0-9]{0,15}"
          required
          title="Please enter a valid keyword [a-z]{0,15}"
          />
        <button className="search-button  btn-sm " type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="12"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        {/* {!props.SearchValid && <p className="errormsg"> * Please add a search to proceed..</p>} */}
      </div>
    </form>
  );
});

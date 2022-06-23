import React from "react";
import "../styles/Queryform.css";

export const Queryform = (props) => {
  return (
    <div>
      <form onSubmit={props.queryresp} className="Queryfrm">
        <div className="form-row  div-wrapper d-flex justify-content-center align-items-center">
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer01">First name</label>
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              id="First Name"
              onChange={(e) =>
                props.handleDataChange(e.target.id, e.target.value)
              }
              placeholder="First name"
              required
            />
            <div className="valid-feedback"></div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer02">Last name</label>
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              id="Last name"
              onChange={(e) =>
                props.handleDataChange(e.target.id, e.target.value)
              }
              placeholder="Last name"
              required
            />
            <div></div>
          </div>
        </div>
        <div className="form-row  div-wrapper d-flex justify-content-center align-items-center">
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServerUsername">Email</label>
            <input
              type="email"
              autoComplete="off"
              onChange={(e) =>
                props.handleDataChange(e.target.id, e.target.value)
              }
              className="form-control"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer03">Mobile Number</label>
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              onChange={(e) =>
                props.handleDataChange(e.target.id, e.target.value)
              }
              id="Mobile Number"
              placeholder="Mobile number"
              required
            />
          </div>
        </div>
        <div className="form-row  div-wrapper d-flex justify-content-center align-items-center">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
               your Query
            </label>
            <textarea
              className="form-control "
              placeholder="Please let us know your query"
              autoComplete="off"
              id="Query For"
              onChange={(e) =>
                props.handleDataChange(e.target.id, e.target.value)
              }
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="form-group div-wrapper d-flex justify-content-center align-items-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="invalidCheck3"
              required
            />
            <label className="form-check-label">
              Agree to terms and conditions
            </label>
            <div>You must agree before submitting.</div>
            <button className="btn-primary btn-md btnsub" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

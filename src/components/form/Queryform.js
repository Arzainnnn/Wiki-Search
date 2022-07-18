import React from "react";
import '../../styles/Mode.css';
import "../../styles/Queryform.css";

export const Queryform = (props) => {
  return (
    <>
      <form onSubmit={props.queryresponseHandler} className="query-form">
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
        <div>
         
          <div className="form-group div-wrapper d-flex justify-content-center align-items-center">
            <textarea
              className="form-control col-md-6"
              placeholder="Please let us know your query.."
              id="Query On"
              onChange={(e) =>
                props.handleDataChange(e.target.id, e.target.value)
              }
              rows="5"
            ></textarea>
          </div>
        </div>


        <div className="form-group div-wrapper d-flex form-group div-wrapper d-flex justify-content-center align-items-center agrees ">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Agreement "
              onChange={(e) =>
                props.handleDataChange(e.target.id, e.target.value)
              }
              required
            />

            <label className="form-check-label">
              Agree to terms and conditions
            </label>
            <div>You must agree before submitting.</div>

            <button className="btn-primary btn-md btn-submit" type="submit">
              Submit
            </button>

          </div>
        </div>
      </form>
    </>
  );
};

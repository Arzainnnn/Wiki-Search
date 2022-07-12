import React from "react";
export const Loading = () => {
  return (
    <div className="text-center spinner">
      <div className="spinner-grow spinner-grow-sm text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Preloader = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;

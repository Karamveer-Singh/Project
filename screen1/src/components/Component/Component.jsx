/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ className, vector = "/img/vector-12.svg", img = "/img/vector-11.svg" }) => {
  return (
    <div className={`component ${className}`}>
      <img className="img" alt="Vector" src={vector} />
      <img className="vector-2" alt="Vector" src={img} />
    </div>
  );
};

Component.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
};

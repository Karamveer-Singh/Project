/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefault = ({ className, group = "/img/group.png" }) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="type-for-search">Type for Search</div>
      <img className="group-3" alt="Group" src={group} />
    </div>
  );
};

PropertyDefault.propTypes = {
  group: PropTypes.string,
};

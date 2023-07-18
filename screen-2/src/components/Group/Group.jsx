/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Group = ({ className }) => {
  return (
    <div className={`group ${className}`}>
      <div className="overlap-group">
        <div className="actively">Actively Interviewing</div>
        <img className="vector" alt="Vector" src="/img/vector-9.svg" />
        <div className="ellipse" />
      </div>
      <div className="job-search-status">Job search status</div>
    </div>
  );
};

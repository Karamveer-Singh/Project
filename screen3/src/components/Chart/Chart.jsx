/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Chart = ({ className }) => {
  return (
    <div className={`chart ${className}`}>
      <div className="overlap-group">
        <img className="vector" alt="Vector" src="/img/vector-8.svg" />
        <img className="img" alt="Vector" src="/img/vector-9.svg" />
        <img className="vector-2" alt="Vector" src="/img/vector-10.svg" />
        <div className="rectangle" />
      </div>
    </div>
  );
};

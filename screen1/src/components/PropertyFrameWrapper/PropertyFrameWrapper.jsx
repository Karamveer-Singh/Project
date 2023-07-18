/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyFrameWrapper = ({ property1, className, overlapGroupClassName, line = "/img/line-46-6.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-29",
  });

  return (
    <div
      className={`property-frame-wrapper ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`div-wrapper ${state.property1}`}>
        <div className={`line-wrapper ${overlapGroupClassName}`}>
          <img className="line" alt="Line" src={state.property1 === "frame-31" ? "/img/line-46-5.svg" : line} />
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "frame-29") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "frame-30",
        };
    }
  }

  if (state.property1 === "frame-30") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "frame-29",
        };

      case "click":
        return {
          property1: "frame-31",
        };
    }
  }

  if (state.property1 === "frame-31") {
    switch (action) {
      case "click":
        return {
          property1: "frame-29",
        };
    }
  }

  return state;
}

PropertyFrameWrapper.propTypes = {
  property1: PropTypes.oneOf(["frame-29", "frame-31", "frame-30"]),
  line: PropTypes.string,
};

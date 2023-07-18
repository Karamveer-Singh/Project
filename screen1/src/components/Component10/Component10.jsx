/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component10 = ({
  property1,
  className,
  overlapGroupClassName,
  searchClassName,
  search = "/img/search-5.png",
  searchClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-29",
  });

  return (
    <div
      className={`component-10 ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`overlap-group-5 ${overlapGroupClassName}`}>
        {state.property1 === "frame-29" && (
          <>
            <img className={`search ${searchClassName}`} alt="Search" src={search} />
            <p className="search-by-job-title">Search by Job title, company, keywords</p>
          </>
        )}

        {state.property1 === "variant-2" && <img className="search" alt="Search" src="/img/search-3.png" />}
      </div>
      <img className={`search-2 ${searchClassNameOverride}`} alt="Search" src="/img/search-2.png" />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "frame-29") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "frame-29",
        };
    }
  }

  return state;
}

Component10.propTypes = {
  property1: PropTypes.oneOf(["frame-29", "variant-2"]),
  search: PropTypes.string,
};

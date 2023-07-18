/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComponentWrapper } from "../ComponentWrapper";
import "./style.css";

export const PropertyHomeWrapper = ({
  selected = true,
  property1,
  className,
  messagesClassName,
  messagesIcon = "/img/messages-icon-2.svg",
  vector = "/img/vector-15.svg",
  img = "/img/vector-14.svg",
  rectangleClassName,
  upcomingEventsIcon = "/img/upcoming-events-icon-1.png",
}) => {
  return (
    <div className={`property-home-wrapper ${property1} ${className}`}>
      {["home", "myjobs"].includes(property1) && (
        <div className="overlap-group-2">
          <div className="yellow-selected">
            {property1 === "myjobs" && (
              <>
                <>{selected && <div className="rectangle-4" />}</>
                <>{selected && <div className="rectangle-5" />}</>
              </>
            )}

            {property1 === "home" && <div className="dashboard">Dashboard</div>}
          </div>
          <div className="group-2">
            {property1 === "home" && (
              <>
                <>{selected && <div className="rectangle-4" />}</>
                <>{selected && <div className="rectangle-5" />}</>
              </>
            )}

            {property1 === "myjobs" && (
              <>
                <div className="overlap-group-3">
                  <img className="vector-3" alt="Vector" src={vector} />
                  <img className="vector-4" alt="Vector" src={img} />
                </div>
                <div className="my-jobs">My Jobs</div>
              </>
            )}
          </div>
          {property1 === "home" && (
            <ComponentWrapper
              className="component-7-dashboard"
              divClassName="instance-node"
              divClassNameOverride="component-2"
              rectangleClassName="component-instance"
              rectangleClassNameOverride="component-7-dashboard-instance"
            />
          )}
        </div>
      )}

      {property1 === "component-5" && (
        <>
          <>{selected && <div className={`rectangle-6 ${messagesClassName}`} />}</>
          <>{selected && <div className="rectangle-7" />}</>
        </>
      )}

      {["component-5", "messages"].includes(property1) && (
        <div
          className={`messages-2 ${
            property1 === "messages" ? messagesClassName : property1 === "component-5" ? rectangleClassName : undefined
          }`}
        >
          {property1 === "messages" && (
            <>
              <div className="text-wrapper">Messages</div>
              <img className="messages-icon" alt="Messages icon" src={messagesIcon} />
            </>
          )}

          {property1 === "component-5" && (
            <>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-4">
                  <img className="upcoming-events-icon" alt="Upcoming events icon" src={upcomingEventsIcon} />
                  <div className="ellipse-2" />
                  <div className="element-2">3</div>
                </div>
              </div>
              <div className="upcoming-events">
                Upcoming
                <br />
                events
              </div>
            </>
          )}
        </div>
      )}

      {property1 === "messages" && (
        <>
          <>{selected && <div className="rectangle-4" />}</>
          <>{selected && <div className={`rectangle-5 ${rectangleClassName}`} />}</>
        </>
      )}
    </div>
  );
};

PropertyHomeWrapper.propTypes = {
  selected: PropTypes.bool,
  property1: PropTypes.oneOf(["messages", "home", "component-5", "myjobs"]),
  messagesIcon: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  upcomingEventsIcon: PropTypes.string,
};

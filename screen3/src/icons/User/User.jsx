/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const User = ({ className }) => {
  return (
    <svg
      className={`user ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M24.6593 25.5589C24.0895 23.9641 22.8341 22.5549 21.0876 21.5499C19.3412 20.5448 17.2013 20 15 20C12.7987 20 10.6588 20.5448 8.91239 21.5498C7.16595 22.5549 5.91049 23.9641 5.34074 25.5589"
        stroke="#50B600"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle className="circle" cx="15" cy="10" r="5" stroke="#50B600" strokeLinecap="round" strokeWidth="2" />
      <line className="line-7" stroke="#50B600" strokeWidth="2" x1="5" x2="25" y1="26.5" y2="26.5" />
      <path
        className="path"
        d="M8.05571 4.53153C7.23196 4.5447 6.54509 3.87946 6.53192 3.05571C6.51874 2.23195 7.18398 1.54508 8.00774 1.53191C8.83149 1.51873 9.51836 2.18398 9.53153 3.00773C9.54471 3.83148 8.87947 4.51835 8.05571 4.53153Z"
        stroke="#50B600"
      />
      <path
        className="path"
        d="M20.0557 3.53153C19.232 3.5447 18.5451 2.87946 18.5319 2.05571C18.5187 1.23195 19.184 0.545085 20.0077 0.53191C20.8315 0.518735 21.5184 1.18398 21.5315 2.00773C21.5447 2.83148 20.8795 3.51835 20.0557 3.53153Z"
        stroke="#50B600"
      />
    </svg>
  );
};

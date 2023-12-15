import React from "react";
import "./Navbar.css";

function HamsBurger({ hamsburgerhandler, status }) {
  return (
    <div className="mt-[6px] sm:my-auto z-50">
      <div
        className={`cursor-pointer ${status ? "change" : ""}  h-6 w-6 mt-21`}
        onClick={hamsburgerhandler}
      >
        <i className="block w-full h-1 linex bg-white line1 mb-1"></i>
        <i className="block w-full linex h-1 bg-white line2 mb-1"></i>
        <i className="block linex w-full h-1 bg-white line3"></i>
      </div>
    </div>
  );
}

export default HamsBurger;

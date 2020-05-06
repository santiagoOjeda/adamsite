import React from "react";
import arrowUp from "../../Resources/Images/up-arrow-icon.svg";
import arrowDown from "../../Resources/Images/down-arrow-icon.svg";

const UpDown = ({ click }) => {
  return (
    <div className="up-down">
      <button onClick={() => click("up")}>
        <img src={arrowUp} alt="arrow up" />
      </button>
      <button onClick={() => click("down")}>
        <img src={arrowDown} alt="arrow down" />
      </button>
    </div>
  );
};

export default UpDown;

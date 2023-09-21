import React, { useState } from "react";
import "./toolbar.css";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

function Toolbar() {
  const [value, setValue] = useState(1);
  const decreaseHandler = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  const increaseHanlder = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <>
      <div className="page-controllers">
        <ul type="none">
          <li>
            <button className="page__control-button" onClick={increaseHanlder}>
              <MdArrowUpward />
            </button>
          </li>
          <li>
            <button onClick={decreaseHandler}>
              <MdArrowDownward className="page__control-button" />
            </button>
          </li>
        </ul>
        <div className="page-no-display">
          <input type="text " value={value} />
          <span>/</span>
          <span>12</span>
        </div>
      </div>
    </>
  );
}

export default Toolbar;

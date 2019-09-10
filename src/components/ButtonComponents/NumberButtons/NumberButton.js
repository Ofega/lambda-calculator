import React from "react";

const NumberButton = (props) => {
  return (
    <>
       <button className="btn number" onClick={() => props.updateDisplay(props.number)}>{props.number}</button>
    </>
  );
};

export default NumberButton;

import React from "react";

const NumberButton = (props) => {
  let button;

  if(props.number === "0") {
    button = <button className="btn number zero" onClick={() => props.updateDisplay(props.number)}>{props.number}</button>
  } else {
    button = <button className="btn number" onClick={() => props.updateDisplay(props.number)}>{props.number}</button>
  }

  return (
    <>
       {button}
    </>
  );
};

export default NumberButton;

import React from "react";

const SpecialButton = (props) => {
  let button;

  if(props.char === "C") {
    button = <button className="btn special clear" onClick={props.reset}>{props.char}</button>;
  } else if(props.char === "%") {
    button = <button className="btn special" onClick={props.percent}>{props.char}</button>;
  } else {
    button = <button className="btn special" onClick={props.toggleSign}>{props.char}</button>;
  }

  return (
    <>
      {button}
    </>
  );
};

export default SpecialButton;
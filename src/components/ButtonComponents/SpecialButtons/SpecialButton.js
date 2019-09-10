import React from "react";

const SpecialButton = (props) => {
  let button;
  if(props.char === "C") {
    button = <button className="btn special" onClick={props.reset}>{props.char}</button>;
  } else {
    button = <button className="btn special">{props.char}</button>;
  }

  return (
    <>
      {button}
    </>
  );
};

export default SpecialButton;
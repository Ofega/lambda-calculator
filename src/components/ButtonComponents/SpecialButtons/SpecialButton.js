import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="btn special" onClick={props.clearResult}>{props.char}</button>
    </>
  );
};

export default SpecialButton;
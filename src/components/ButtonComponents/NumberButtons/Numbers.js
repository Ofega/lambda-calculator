import React, { useState } from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';

const Numbers = (props) => {

  const [numberState] = useState(numbers);

  return (
    <div className="btns-container">
      {
       numberState.map(number => <NumberButton number={number} key={number} updateDisplay={props.updateDisplay} />)
      }
    </div>
  );
};


export default Numbers;

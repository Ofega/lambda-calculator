import React from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
       numbers.map(number => <NumberButton number={number} />)
      }
    </div>
  );
};


export default Numbers;

import React, { useState } from "react";
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

const Operators = (props) => {

  const [operatorState] = useState(operators);

  return (
    <div className="btns-container">
      {
       operatorState.map(operator => <OperatorButton key={operator.char} char={operator.char} value={operator.value} />)
      }
    </div>
  );
};


export default Operators;

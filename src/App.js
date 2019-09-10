import React, { useState } from "react";
import "./App.css";
import Display from './components/DisplayComponents/Display'
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Logo from "./components/DisplayComponents/Logo";

function App() {

  // STATE DECLARATION
  const [currentResult, setCurrentResult] = useState('0');
  const [previousResult, setpreviousResult] = useState(0);
  const [isPreviousKeyOperator, setPreviousKey] = useState(false);
  const [currentOperator, setCurrentOperator] = useState('');


  // UPDATE DISPLAY FUNCTION
  const updateDisplay = value => {
    if (isPreviousKeyOperator) {
      setCurrentResult(value); 
      setPreviousKey(false);
    } else {
      if (value === '.') {
        currentResult.indexOf('.') > -1 ? 
          setCurrentResult(currentResult) : 
          setCurrentResult(currentResult + '.');
      } else if(currentResult === '0') {
        setCurrentResult(value);
      } else {
        setCurrentResult(currentResult + value);
      }
    }
  }

  // RESET CALCULATOR
  const reset = () => {
    setCurrentResult('0');
    setpreviousResult(0);
    setPreviousKey(false);
    setCurrentOperator('');
  }

  // EVALUATE EXPRESSION EVERYTIME AN OPERATOR IS CLICKED(ON SECOND CLICK UPWARDS)
  const autoEvaluate = operator => {
    if(!currentOperator) { // IF THERE'S NO OPERATOR TRACKED
      if(operator === '=') {
        setCurrentResult(currentResult);
      } else {
        setpreviousResult(parseFloat(currentResult));
        setCurrentOperator(operator);
        setPreviousKey(true);
      }
    } else {
      setPreviousKey(true);
      setCurrentResult(calculate(previousResult, currentOperator, parseFloat(currentResult)));
      setpreviousResult(calculate(previousResult, currentOperator, parseFloat(currentResult)));
      operator === '=' ? setCurrentOperator('') : setCurrentOperator(operator);
    }
  };

  // FUNCTION FOR CALCULATION BASED ON OPERATOR
  const calculate = (n1, operator, n2) => {
    let result = 0;

    if(operator === "+") {
      result = n1 + n2;
    } else if(operator === "-") {
      result = n1 - n2;
    } else if(operator === "*") {
      result = n1 * n2;
    } else if(operator === "/") {
      result = n1 / n2;
    }

    return Math.round(result * 100) / 100;
  }


  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display currentResult={currentResult} />
        <div className="btn-layout">
          <div className="btn-layout-1">
            <Specials reset={reset} />
            <Numbers updateDisplay={updateDisplay} />
          </div>
          <div className="btn-layout-2">
            <Operators autoEvaluate={autoEvaluate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

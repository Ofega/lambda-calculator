import React, { useState } from "react";
import "./App.css";
import Display from './components/DisplayComponents/Display'
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [result, setResult] = useState(0);

  const updateResult = value => {
    setResult(parseInt((result + value), 10));
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display result={result} />
        <div className="btn-layout">
          <div className="btn-layout-1">
            <Specials />
            <Numbers updateResult={updateResult} />
          </div>
          <div className="btn-layout-2">
            <Operators />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

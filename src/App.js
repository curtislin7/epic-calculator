import './App.css';
import React from 'react';
import { CalculatorRow, CalculatorButton } from './components';

function App() {
  const [calculation, setCalculation] = React.useState(0)

  return (
    <div className="App">
      <CalculatorRow>
        <input className={"calculation-input"} value={calculation} readOnly/>
      </CalculatorRow>
      <CalculatorRow>
        <CalculatorButton text={'9'} setCalculation={setCalculation}/>
        <CalculatorButton isFunctionButtonText={true} text={'='}/>
      </CalculatorRow>
    </div>
  );
}

export default App;

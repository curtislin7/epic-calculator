import './App.css';
import React from 'react';
import { CalculatorRow, CalculatorButton } from './components';

function App() {
  const [calculation, setCalculation] = React.useState(0)

  return (
    <div className="App">
      <div className={"calculator-container"}>
        <div className={"calculator-title"}>HARD CORE CALCULATOR.</div>
        <div className={"calculation-container-display"}>{calculation}</div>
        <CalculatorRow>
          <CalculatorButton text={'7'} setCalculation={setCalculation}/>
          <CalculatorButton text={'8'} setCalculation={setCalculation}/>
          <CalculatorButton text={'9'} setCalculation={setCalculation}/>
          <CalculatorButton isFunctionButtonText={true} text={'/'}/>
          <div className={'placeholder'}/>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton text={'4'} setCalculation={setCalculation}/>
          <CalculatorButton text={'5'} setCalculation={setCalculation}/>
          <CalculatorButton text={'6'} setCalculation={setCalculation}/>
          <CalculatorButton isFunctionButtonText={true} text={'x'}/>
          <div className={'placeholder'}/>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton text={'1'} setCalculation={setCalculation}/>
          <CalculatorButton text={'2'} setCalculation={setCalculation}/>
          <CalculatorButton text={'3'} setCalculation={setCalculation}/>
          <CalculatorButton isFunctionButtonText={true} text={'-'}/>
          <div className={'placeholder'}/>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton text={'0'} setCalculation={setCalculation}/>
          <div className={'placeholder'}/>
          <div className={'placeholder'}/>
          <CalculatorButton isFunctionButtonText={true} text={'+'}/>
          <CalculatorButton isFunctionButtonText={true} text={'='}/>
        </CalculatorRow>
      </div>
    </div>
  );
}

export default App;

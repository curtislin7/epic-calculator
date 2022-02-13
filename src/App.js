import './App.css';
import React from 'react';
import { CalculatorRow, CalculatorButton } from './components';


function App() {

  const [currentNum, setCurrentNum] = React.useState(0)

  return (
    <div className="App">
      <CalculatorRow>
        {currentNum}
      </CalculatorRow>
      <CalculatorRow>
        <CalculatorButton text={'9'} setCurrentNum={setCurrentNum}/>
        <CalculatorButton isFunctionButtonText={true} text={'='}/>
      </CalculatorRow>
    </div>
  );
}

export default App;

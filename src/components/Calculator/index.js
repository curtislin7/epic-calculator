import './index.css'
import React from 'react';
import { CalculatorButton, CalculatorRow } from ".."

export const Calculator =  () => {
  const [calculation, setCalculation] = React.useState(0)
  const handleButtonClick = (text) => {
    let newText = calculation + text
    if (['-', '+', '/', '*'].includes(text)) {
      newText = calculation + ' ' + text + ' '
    }
    setCalculation(newText.replace(/^0+/, ''))
  }

  return (
    <div className={"calculator-container"}>
      <div className={"calculator-title"}>HARD CORE CALCULATOR.</div>
      <div className={"calculation-container-display"}>{calculation}</div>
      <CalculatorRow>
      <CalculatorButton isFunctionButtonText={true} text={'CE'} calculation={calculation} handleButtonClick={() => setCalculation(0)}/>
      <div className={'placeholder'}/>
      <div className={'placeholder'}/>
      <div className={'placeholder'}/>
      <div className={'placeholder'}/>
      </CalculatorRow>
      <CalculatorRow>
      <CalculatorButton text={'7'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton text={'8'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton text={'9'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton isFunctionButtonText={true} text={'/'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <div className={'placeholder'}/>
      </CalculatorRow>
      <CalculatorRow>
      <CalculatorButton text={'4'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton text={'5'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton text={'6'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton isFunctionButtonText={true} text={'*'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <div className={'placeholder'}/>
      </CalculatorRow>
      <CalculatorRow>
      <CalculatorButton text={'1'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton text={'2'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton text={'3'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton isFunctionButtonText={true} text={'-'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <div className={'placeholder'}/>
      </CalculatorRow>
      <CalculatorRow>
      <CalculatorButton text={'0'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <div className={'placeholder'}/>
      <div className={'placeholder'}/>
      <CalculatorButton isFunctionButtonText={true} text={'+'} calculation={calculation} handleButtonClick={handleButtonClick}/>
      <CalculatorButton isFunctionButtonText={true} text={'='} calculation={calculation} handleButtonClick={() => setCalculation(eval(calculation))}/>
      </CalculatorRow>
    </div>
  )
}
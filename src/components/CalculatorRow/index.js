import './index.css'

export const CalculatorRow = (props) => {
  return (
    <div style={props.style} className={'calculator-row'} onClick={handleCalculatorRowclick}>
      {props.children}
    </div>
  )
}

const handleCalculatorRowclick = () => {
  // console.log('you clicked the calculator row!')
}
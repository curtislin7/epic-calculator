import './index.css'

export const CalculatorButton = ({text="None", isFunctionButtonText=false, setCalculation}) => {
  return (
    <button className="button" onClick={() => setCalculation(text)}>
      <div className={isFunctionButtonText ? "function-button-text" : "button-text"}>{text}</div>
    </button>
  )
}
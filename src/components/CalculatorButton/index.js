import './index.css'

export const CalculatorButton = ({text="None", isFunctionButtonText=false, handleButtonClick}) => {
  return (
    <button className="button" onClick={() => handleButtonClick(text)}>
      <div className={isFunctionButtonText ? "function-button-text" : "button-text"}>{text}</div>
    </button>
  )
}
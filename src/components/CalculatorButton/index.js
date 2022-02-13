import './index.css'

export const CalculatorButton = ({text="None", isFunctionButtonText=false, setCurrentNum}) => {
  return (
    <button className="button" onClick={() => setCurrentNum(text)}>
      <div className={isFunctionButtonText ? "function-button-text" : "button-text"}>{text}</div>
    </button>
  )
}
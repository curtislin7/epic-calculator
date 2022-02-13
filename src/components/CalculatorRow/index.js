export const CalculatorRow = (props) => {
  return (
    <div onClick={handleCalculatorRowclick}>
      {props.children}
    </div>
  )
}

const handleCalculatorRowclick = () => {
  console.log('you clicked the calculator row!')
}
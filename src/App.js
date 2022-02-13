import './App.css';
import { CalculatorRow } from './components/CalculatorRow';


function App() {
  return (
    <div className="App">
      <CalculatorRow>
        <button className="button" onClick={() => {alert('You clicked a button.')}}>
          <div className="button-text">=</div>
        </button>
      </CalculatorRow>
    </div>
  );
}

export default App;

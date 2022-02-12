import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <button className="button" onClick={() => {alert('You clicked a button.')}}>
          <div className="button-text">
            Calculate
          </div>
        </button>
    </div>
  );
}

export default App;

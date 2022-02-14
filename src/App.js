import './App.css';
import { Calculator } from './components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<div>This app should definitely not be used in any capacity.</div>}/>
          <Route path="/" element={<Calculator/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

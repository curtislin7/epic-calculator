import './App.css';
import { AboutPage, Calculator } from './components'
import {
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Calculator/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

const Layout = () => {
  return (
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
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App;

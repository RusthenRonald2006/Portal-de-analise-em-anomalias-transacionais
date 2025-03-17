import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
          <Login/>
      </div>
    </Router>
  );
}

export default App;

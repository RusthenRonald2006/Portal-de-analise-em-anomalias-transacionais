import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={Dashboard}/>
      </Routes>
    </Router>
  );
}

export default App;

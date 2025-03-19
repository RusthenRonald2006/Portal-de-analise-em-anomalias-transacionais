import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Dashboard from "./components/Pages/Dasboard";
import GestaoContas from "./components/Pages/GestaoContas";
import GestaoTransacoes from "./components/Pages/GestaoTransacoes"; 
import Notificacoes from "./components/Pages/Notificacoes";
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

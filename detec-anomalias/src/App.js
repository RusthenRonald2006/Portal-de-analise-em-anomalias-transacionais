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
          <Route path="/gestaocontas" element={<GestaoContas/>}/>
          <Route path="/gestaotransacoes" element={<GestaoTransacoes/>}/>
          <Route path="/notificacoes" element={<Notificacoes/>}/>
      </Routes>
    </Router>
  );
}

export default App;

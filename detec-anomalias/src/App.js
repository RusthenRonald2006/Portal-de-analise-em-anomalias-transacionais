import Login from "./components/Pages/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Dashboard from "./components/Pages/Dashboard";
import GestaoContas from "./components/Pages/GestaoContas";
import GestaoTransacoes from "./components/Pages/GestaoTransacoes"; 
import Notificacoes from "./components/Pages/Notificacoes";
import Portal from "./components/Pages/Portal";
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/portal" element={<Portal/>}/>
          <Route path="/gestaotransacoes" element={<GestaoTransacoes/>}/>
          <Route path="/notificacoes" element={<Notificacoes/>}/>
      </Routes>

      <ToastContainer position="top-center" autoclose={5000}/>
    </Router>
  );
}

export default App;

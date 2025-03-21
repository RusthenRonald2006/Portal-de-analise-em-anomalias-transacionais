import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { Home, Users, Settings, BarChart2, FileText } from 'lucide-react';
function Navbar(){
    const menuItems = [
        { icon: Home, text: 'Dashboard' },
        { icon: Users, text: 'Usuários' },
        { icon: FileText, text: 'Relatórios' },
        { icon: BarChart2, text: 'Análises' },
        { icon: Settings, text: 'Configurações' },
      ];
    return(
        <div>

        </div>
)} export default Navbar
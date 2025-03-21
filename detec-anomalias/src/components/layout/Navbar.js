import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { Home, Users, Settings, BarChart2, FileText } from 'lucide-react';
function Navbar(){
    const menuItems = [
        { icon: Home, text: 'Dashboard' },
        { icon: Users, text: 'Contas Suspeitas' },
        { icon: FileText, text: 'Gestão de Transações' },
        { icon: BarChart2, text: 'Gestão de Contas' },
        { icon: Settings, text: 'Tela de Notificações' },
        { icon: Settings, text : 'Logout'}
      ];
    return(
        <>
            <div className={styles.sidebar_header}>
                <h2 className={styles.navbar_title}>Portal</h2>
            </div>
            <nav className={styles.sidebar_nav}>
                {menuItems.map(()=>(
                    
                ))}
            </nav>
        </>
)} export default Navbar
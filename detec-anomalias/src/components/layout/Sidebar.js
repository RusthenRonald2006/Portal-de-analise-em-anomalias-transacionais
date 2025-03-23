import styles from "./Sidebar.module.css"
import {Link} from "react-router-dom"
import { Home, Users, Settings, BarChart2, FileText } from 'lucide-react';
function Navbar(){
    const menuItems = [
        { icon: Home, text: 'Dashboard' , path: '/portal' },
        { icon: FileText, text: 'Gestão de Transações',path:'/gestaotransacoes' },
        { icon: BarChart2, text: 'Gestão de Contas' ,path:'/gestaocontas'},
        { icon: Settings, text: 'Tela de Notificações' ,path:'/notificacoes'},
        { icon: Settings, text : 'Logout',path:'/'}
      ];
    return(
        <>
            <div className={styles.sidebar_header}>
                <h2 className={styles.sidebar_title}>Portal</h2>
            </div>
            <nav className={styles.sidebar_nav}>
                {menuItems.map((item,index)=>(
                    <Link to={item.path} key={index} href="#" className={styles.nav_item}>
                        <item.icon />
                        <span>{item.text}</span>
                    </Link>
                ))}
            </nav>
        </>
)} export default Navbar
import styles from "./Sidebar.module.css"
import {Link} from "react-router-dom"
import { Home, Users, FileText , LogOut,Bell} from 'lucide-react';
import alan from "../img/alan.png"
import user from "../img/user.jpg"
import user2 from "../img/user2.jpg"
function Navbar(){
    const menuItems = [
        { icon: Home, text: 'Dashboard' , path: '/portal' },
        { icon: FileText, text: 'Gestão de Transações',path:'/gestaotransacoes' },
        { icon: Users, text: 'Gestão de Contas' ,path:'/gestaocontas'},
        { icon: Bell, text: 'Tela de Notificações' ,path:'/notificacoes'},
        { icon:  LogOut, text : 'Logout',path:'/'}
      ];
    return(
        <>
            <div className={styles.sidebar_header}>
                <h2 className={styles.sidebar_title}>Portal</h2>
            </div>
            <div className={styles.user_container}>
                <img src={user2}></img>
                <h2>José</h2>
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
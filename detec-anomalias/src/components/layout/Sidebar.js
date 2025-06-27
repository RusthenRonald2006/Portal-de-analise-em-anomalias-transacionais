import styles from "./Sidebar.module.css"
import {Link} from "react-router-dom"
import { Home, Users, FileText , LogOut,Bell} from 'lucide-react';
import { useState,useEffect, use } from "react";
import api from "../../services/api";
function Navbar(){
    const [qtdNovas, setQtdNovas] = useState(0);
    const menuItems = [
        { icon: Home, text: 'Dashboard' , path: '/portal' },
        { icon: FileText, text: 'Gestão de Transações',path:'/gestaotransacoes' },
        { icon: Users, text: 'Gestão de Contas' ,path:'/gestaocontas'},
        {icon: Bell,text: 'Central de Alertas',path: '/notificacoes',isAlerta: true
    },
        { icon:  LogOut, text : 'Logout',path:'/'}
      ];

      useEffect(()=>{
        const buscarNovas =async ()=>{
            try{
                const responsta = await api.get("/notificacoes");
                const novas = responsta.data.filter((n)=> n.status === "novo")
                setQtdNovas(novas.length);
            } catch(error){
                console.error("Erro ao buscar novas notificações:", error);
            }
      }
        buscarNovas();
        const intervalo = setInterval(buscarNovas, 10000); 
        return () => clearInterval(intervalo); 
      },[])
      
    return(
        <>
            <div className={styles.sidebar_header}>
                <h2 className={styles.sidebar_title}>Banese</h2>
            </div>
            <nav className={styles.sidebar_nav}>
                {menuItems.map((item,index)=>(
                    <Link to={item.path} key={index} href="#" className={styles.nav_item}>
                        <item.icon />
                        <span >
                            {item.text}
                            {item.isAlerta && qtdNovas > 0 && (
                                <span className={styles.quant_novas_not}>{qtdNovas}</span>
                            )}
                        </span>
                    </Link>
                ))}
            </nav>
        </>
)} export default Navbar
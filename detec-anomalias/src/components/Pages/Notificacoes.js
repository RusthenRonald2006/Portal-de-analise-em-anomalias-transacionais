import {useState} from "react"
import styles from "./Notificacoes.module.css"
import Sidebar from "../layout/Sidebar"
import {
    Bell,
    AlertTriangle,
    RefreshCw,
    Rocket,
    Filter,
    Search,
    ChevronDown,
    CheckCircle2,
    Clock,
    XCircle,
    Eye
  } from 'lucide-react';
import { Menu } from 'lucide-react';
function Notificacoes(){

    const [sidebarOpen,setSidebarOpen] = useState(false)

    return(
        <div className={styles.app_container}>
            <button className={styles.mobile_menu_button} onClick={()=> setSidebarOpen(!sidebarOpen)}>
                <Menu/>
            </button>
            <div className={`${styles.overlay} ${sidebarOpen ? styles.open : ''}`}  onClick={() => setSidebarOpen(false)}/>
            <div className={`${styles.sidebar} ${sidebarOpen ?styles.open : ''}`}>
                <Sidebar/>
            </div>
            <div className={styles.main_content}>
                <h1>Notificações</h1>
            </div>
        </div>
    )
} export default Notificacoes
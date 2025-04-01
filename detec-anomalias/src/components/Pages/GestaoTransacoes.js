import {useState} from "react"
import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
import { Search, AlertTriangle, CheckCircle, Clock, Filter } from 'lucide-react';
function GestaoTransacoes(){

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
                <h1>Gestão Transações</h1>
                <div className={styles.filter_section}>
                    <button>

                    </button>
                </div>
            </div>
        </div>
    )
} export default GestaoTransacoes
import {useState} from "react"
import styles from "./GestaoContas.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
function GestaoContas(){
    const [contas,setContas]=useState(
        [{
            "id":1,
            "numero": "1234-5",
            "Titular":"Rusthe Ronald",
            "Transações Suspeitas": 3 ,
            "Status":"suspeita"
        },{

        },{

        }]
    )
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
                <h1>Gestão Contas</h1>
            </div>
        </div>
    )
} export default GestaoContas
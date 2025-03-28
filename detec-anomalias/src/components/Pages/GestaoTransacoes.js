import {useState} from "react"
import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
function GestaoTransacoes(){
    return(
        <div className={styles.app_container}>
            <button className={styles.mobile_menu_button}>
                <Menu/>
            </button>
            <div/>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.main_content}>
                <h1>Gestão Transações</h1>
            </div>
        </div>
    )
} export default GestaoTransacoes
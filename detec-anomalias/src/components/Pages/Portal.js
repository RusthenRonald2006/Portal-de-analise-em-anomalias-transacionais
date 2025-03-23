import React, { useState } from 'react';
import Dashboard from "./Dashboard"
import styles from "./Portal.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
import banesefundo from '../../components/img/banensefundoofc.png'

function Portal(){

    const[sidebarOpen,setSidebarOpen]=useState(false)
    //Se sidebarOpen for true, !sidebarOpen será false.
    //Se sidebarOpen for false, !sidebarOpen será true.
    return(
        <div className={StyleSheet.app_container}>
            <button className={styles.mobile_menu_button} onClick={()=>setSidebarOpen(!sidebarOpen)}>
                <Menu/>
            </button>
            <div className={`${styles.overlay} ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />
            <div className={`${styles.sidebar} ${styles.sidebarOpen ? 'open' : ''}`}>
                <Sidebar/>
            </div>
            <div className={styles.main_content}>
                <Dashboard/>
            </div>
        </div>
    )
} export default Portal
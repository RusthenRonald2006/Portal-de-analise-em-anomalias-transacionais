import React, { useState } from 'react';
import Dashboard from "./Dashboard"
import styles from "./Portal.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
function Portal(){
    return(
        <div className={StyleSheet.app_container}>
            <button className={styles.mobile_menu_button}>
                <Menu/>
            </button>
            <div></div>
            <div className={`${styles.sidebar} ${styles.sidebarOpen ? 'open' : ''}`}>
                <Sidebar/>
            </div>
            <div className={styles.main_content}>
                <Dashboard/>
            </div>
        </div>
    )
} export default Portal
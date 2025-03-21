import Dashboard from "./Dashboard"
import styles from "./Portal.module.css"
import Sidebar from "../layout/Sidebar"
function Portal(){
    return(
        <div className={StyleSheet.app_container}>
            <button>

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
import Dashboard from "./Dashboard"
import styles from "./Portal.module.css"
import Navbar from "../layout/Navbar"
function Portal(){
    return(
        <div className={StyleSheet.app_container}>
            <button>

            </button>
            <div></div>
            <div>
                <Navbar/>
            </div>
            <div className={styles.main_content}>
                <Dashboard/>
            </div>
        </div>
    )
} export default Portal
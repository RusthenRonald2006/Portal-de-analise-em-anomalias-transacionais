import Dashboard from "./Dashboard"
import styles from "./Portal.module.css"
function Portal(){
    return(
        <div className={StyleSheet.app_container}>
            <button>

            </button>
            <div></div>
            <div>
                <p>sidebar</p>
            </div>
            <div className={styles.main_content}>
                <Dashboard/>
            </div>
        </div>
    )
} export default Portal
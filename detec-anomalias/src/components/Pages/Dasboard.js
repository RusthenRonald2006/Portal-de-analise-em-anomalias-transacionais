import styles from "./Dasboard.module.css"
import Navbar from "../layout/Navbar"
function Dashboard(){
    return(
        <div className={styles.container_dasboard}>
            <div className={styles.sidebar}>
                <Navbar/>
            </div>
            <div className={styles.metrics}>

            </div>
        </div>
        )
} export default Dashboard
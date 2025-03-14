import styles from "./Dasboard.module.css"
import Navbar from "../layout/Navbar"
import logobanese from '../../components/img/logo banese.png'
function Dashboard(){
    return(
        <div className={styles.container_dasboard}>
            <div className={styles.sidebar}>
                <img src={logobanese} className={styles.logo_banese}></img>
                <Navbar/>
            </div>
            <div className={styles.metrics}>

            </div>
        </div>
        )
} export default Dashboard
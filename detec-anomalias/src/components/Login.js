import styles from './Login.module.css'
import Logobanese from '../components/img/logobanese.png'
function Login (){
    return(//container
        <div className={styles.login_container}>
            <div className={styles.login_esquerdo}>
                <img src={Logobanese} className={styles.logo}></img>
            </div>
            <div className={styles.login_direito}>

            </div>
        </div>
    )
} export default Login
import styles from './Login.module.css'
import logobanesefundo from '../components/img/logobaneseofc.png'
import logobanese from '../components/img/logo banese.png'
function Login (){
    return(//container
        <div className={styles.login_container}>
           <div className={styles.login_esquerdo}>
               <div>
                    <img src={logobanese} className={styles.logo_banese}></img>
               </div>
               <div>
                    <h1 className={styles.title_banese}>Banese</h1>
               </div>
           </div>
           <div className={styles.login_direito}>

           </div>
        </div>
    )
} export default Login

//
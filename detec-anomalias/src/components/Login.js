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
                <div className={styles.container_form}>
                    <form className={styles.form}>
                        <div>
                            <h1>Welcome to</h1>
                            <h1>Suspicious transactions</h1>
                        </div>
                        <div>
                            <input type='email' placeholder='Digite seu e-mail'></input>
                        </div>
                        <div>
                            <input type='password'></input>
                        </div>
                        <div>
                            <input type='submit' value='login' className={styles.btn}></input>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
} export default Login

//
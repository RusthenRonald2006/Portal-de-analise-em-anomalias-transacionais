import styles from './Login.module.css'
import logobanesefundo from '../components/img/logobaneseofc.png'
import logobanese from '../components/img/logo banese.png'
function Login (){
    return(//container
        <div className={styles.login_container}>
<<<<<<< Updated upstream
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
                        <div >
                            <h1>Welcome to</h1>
                            <h1>Suspicious transactions</h1>
                        </div>
                        <div className={styles.input_group}>
                            <label htmlFor="e-mail">Email</label>
                            <input type='email' name="e-mail" placeholder='Digite seu e-mail'></input>
                        </div>
                        <div className={styles.input_group}>
                            <label htmlFor="password">Senha</label>
                            <input type='password' name="password" placeholder="Digite sua senha"></input>
                        </div>
                        <div>
                            <input type='submit' value='Login' className={styles.btn}></input>
                        </div>
                    </form>
                </div>
           </div>
=======
            
>>>>>>> Stashed changes
        </div>
    )
} export default Login

//
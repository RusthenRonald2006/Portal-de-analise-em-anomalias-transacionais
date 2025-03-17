import styles from './Login.module.css'
import { FaGoogle } from 'react-icons/fa';
import logobanesefundo from '../components/img/logobaneseofc.png'
import logogoogle from '../components/img/logogoogleofc.png'
import logobanese from '../components/img/logo banese.png'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Login (){
    return(//container
        <div className={styles.login_container}>
           <div className={`${styles.login_left} `}>
               <div>
                    <img src={logobanese} className={`${styles.logo_banese}`}></img>
               </div>
               <div>
                    <h1 className={`${styles.title_banese}`}>Banese</h1>
               </div>
           </div>
           <div className={`${styles.login_rigth}`} >
                <div className={`${styles.form_container} `}>
                    <div>
                        <h1>Welcome to</h1>
                        <h2>Suspicious transactions</h2>
                    </div>
                    <form>
                        <div className={styles.form_group}>
                            <label htmlFor="e-mail">Email</label>
                            <input type='email' name="e-mail" placeholder='Digite seu e-mail'></input>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="password">Senha</label>
                            <input type='password' name="password" placeholder="Digite sua senha"></input>
                        </div>
                        <div className={styles.container_btn}>
                            <button type='button' className={styles.btn}>
                                Login
                            </button>
                        </div>
                        <div className={styles.forgot_password}>
                            <p>Remeber me</p>
                            <span>Forgot password</span>
                        </div>
                        <div className={styles.google_login}>
                            <img src={logogoogle}></img>
                        </div>
                        <div className={styles.google_register}>
                            <p>Don’t have an account?</p>
                            <span>Register</span>
                        </div>
                    </form>
                </div>
           </div>
            
        </div>
    )
} export default Login
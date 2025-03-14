import styles from './Login.module.css'
import { FaGoogle } from 'react-icons/fa';
import logobanesefundo from '../components/img/logobaneseofc.png'
import logogoogle from '../components/img/logogoogleofc.png'
import logobanese from '../components/img/logo banese.png'
import mediastyles from "./Loginmedia.module.css"
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function Login (){
    return(//container
        <div className={styles.login_container}>
           <div className={`${styles.login_esquerdo} ${mediastyles.loginesquerdo}`}>
               <div>
                    <img src={logobanese} className={`${styles.logo_banese} ${mediastyles.logobanese}`}></img>
               </div>
               <div>
                    <h1 className={`${styles.title_banese} ${mediastyles.titlebanese}`}>Banese</h1>
               </div>
           </div>
           <div className={styles.form_section}>
                <div className={`${styles.form_container} ${mediastyles.responsive}`}>
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

/* <div className={styles.container_form}>
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
                        <div className={styles.logo_google}>
                            <img src={logogoogle} ></img>
                        </div>
                    </form>
                </div>       css .container_form{
    height: 650px;
    width: 600px;
    border: 1px solid #50C878;
    border-radius: 20px;
}
.form{
    margin-left: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.input_group{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.input_group label{
    margin-top: 5px;
}
.input_group input, .btn {
    width: 100%;
}
.input_group input {
    flex-direction: column;
    padding: 10px;
    background-color: #ECECEC;
    border: none;
    border-radius: 5px;
}
.btn{
    margin-top: 20px;
    background: linear-gradient(to right, #50C878, #317949);
    border: none;
    padding: 10px;
    color: white;
    font-weight: bolder;
    font-size: 1em;
    border-radius: 5px;
}
form h1{
    font-size: 2.5em;
}
.logo_google{
    width: 100%;
    display: flex;
    justify-content: center;
}
.logo_google img{
    width: 70px;
}
*/
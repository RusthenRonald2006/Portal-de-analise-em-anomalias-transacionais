import styles from './Login.module.css'
import Logobanese from '../components/img/logobanese2.png'
function Login (){
    return(//container
        <div className={styles.login_container}>
            <div className={styles.login_esquerdo}>
                <div><img src={Logobanese} className={styles.logo}></img></div>
                <div><h1 className={styles.titlebanese}>Banese</h1></div>
            </div>
            <div className={styles.login_direito}>
            <div className="login-box">
                <h2>Welcome to</h2>
                <h3>Suspicious transactions</h3>
                <form>
                    <div className="input-group">
                    <span className="icon">📧</span>
                    <input type="email" placeholder="example@gmail.com" required />
                    </div>

                    <div className="input-group">
                    <span className="icon">🔒</span>
                    <input type="password" placeholder="********" required />
                    </div>

                    <div className="options">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="google-login">
                    <span>🔵</span> Login with Google
                    </div>

                    <p className="register-link">
                    Don’t have an account? <a href="#">Register</a>
                    </p>
                </form>
                </div>
            </div>
        </div>
    )
} export default Login
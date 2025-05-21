import styles from './Login.module.css'
import { FaGoogle } from 'react-icons/fa';
import logogoogle from '../../components/img/logogoogleofc.png'
import logobanese from '../../components/img/logo banese.png'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
function Login (){
    const [matricula,setMatricula]=useState("")
    const [senha,setSenha]=useState("")
    const [erro,setErro]=useState("")
    const navigate =useNavigate()

    const handleLogin = async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.post("https://antifraude-api.onrender.com/login",{
                matricula,
                senha
            });

            const token =response.data.access_token;
            localStorage.setItem("token",token)

            navigate("/portal");
        
        } catch (error){
            setErro("Matrícula ou senha inválidos.")
        }
    };

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
                        <h1>Bem-vindo ao</h1>
                        <h2>Portal de Anomalias</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className={styles.form_group}>
                            <label htmlFor="mat">Matrícula</label>
                            <input type='number' placeholder='Digite sua matrícula' name='mat' value={matricula} onChange={(e)=>setMatricula(e.target.value)} required></input>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="password">Senha</label>
                            <input type='password' name="password" placeholder="Digite sua senha" value={senha}
                            onChange={(e)=>setSenha(e.target.value)} required></input>
                        </div>

                        <div className={styles.container_btn}>
                            <div className={styles.login_link}>
                                <button type='submit' className={styles.btn}>
                                    Login
                                </button>
                            </div>
                        </div>
                        {erro && <div className={styles.error_message}><p>{erro}</p></div>}
                        <div className={styles.forgot_password}>
                            <div className={styles.checkbox}>
                                <input type='checkbox'></input>
                                <p>Remeber me</p>
                            </div>
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
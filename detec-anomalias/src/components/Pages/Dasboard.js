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
                <div>
                    <h1>Visão Geral das Transações</h1>
                </div>
                <div className={styles.container_cards}>
                    <div className={styles.group_cards}>
                        <h3>5.320 transações </h3>
                        <p>Total  de Transações
                        (Este mês)</p>
                    </div>
                    <div className={styles.group_cards}>
                        <h3>5.320 transações </h3>
                        <p>Total  de Transações
                        (Este mês)</p>
                    </div>
                    <div className={styles.group_cards}>
                        <h3>5.320 transações </h3>
                        <p>Total  de Transações
                        (Este mês)</p>
                    </div>
                    <div className={styles.group_cards}>
                        <h3>5.320 transações </h3>
                        <p>Total  de Transações
                        (Este mês)</p>
                    </div>
                    <div className={styles.group_cards}>
                        <h3>5.320 transações </h3>
                        <p>Total  de Transações
                        (Este mês)</p>
                    </div>
                </div>
            </div>
        </div>
        )
} export default Dashboard
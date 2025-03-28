import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
function GestaoTransacoes(){
    return(
        <div className={styles.app_container}>
            <button></button>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.main_content}>
                <h1>Gestão Transações</h1>
            </div>
        </div>
    )
} export default GestaoTransacoes
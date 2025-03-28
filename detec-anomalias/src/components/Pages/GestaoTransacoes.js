import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
function GestaoTransacoes(){
    return(
        <div className={styles.app_container}>
            <button></button>
            <div className={StyleSheet.sidebar}>
                <h2>Sidebar</h2>
            </div>
            <div className={StyleSheet.main_content}>
                <h1>Gestão Transações</h1>
            </div>
        </div>
    )
} export default GestaoTransacoes
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav className={styles.container_list}>
            <ul>
                <li><Link to="" className={styles.link}>Contas Suspeitas</Link></li>
                <li><Link to="" className={styles.link}>Gestão de Transações</Link></li>
                <li><Link to="" className={styles.link}>Gestão de Contas</Link></li>
                <li><Link to="" className={styles.link}>Tela de Notificações</Link></li>
                <li><Link to="/" className={styles.link}>Logout</Link></li>
            </ul>
        </nav>
)} export default Navbar
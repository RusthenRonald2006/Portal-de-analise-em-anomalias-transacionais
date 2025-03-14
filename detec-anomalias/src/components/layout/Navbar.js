import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav className={styles.container_list}>
            <ul>
                <li><a>Contas Suspeitas</a></li>
                <li><a>Gestão de Transações</a></li>
                <li><a>Gestão de Contas</a></li>
                <li><a>Tela de Notificações</a></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
)} export default Navbar
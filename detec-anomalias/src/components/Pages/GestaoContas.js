import {useState} from "react"
import styles from "./GestaoContas.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
import { Shield, AlertTriangle, Clock, CheckCircle, Search } from 'lucide-react';
function GestaoContas(){
    const [contas,setContas]=useState(
        [{
            id:"1",
            numero: "1234-5",
            Titular:"Rusthen Ronald,",
            TransacoesSuspeitas : 3 ,
            ultimaAtividade:{
                data:"2024-03-15",
                valor: 15000.00
            },
            Status:"suspeita"
        },{
            id: '2',
            numero: '5678-9',
            titular: 'Maria Santos',
            transacoesSuspeitas: 5,
            ultimaAtividade: {
                data: '2024-03-14',
                valor: 25000.00
            },
            status:"análise"
        },{
            id:"3",
            numero:'9012-3',
            titular:"Allan Maia ",
            transacoesSuspeitas: 2,
            ultimaAtividade: {
                data: '2024-03-13',
                valor: 8000.00
              },
            status: "normal"
        }]
    )
    const [sidebarOpen,setSidebarOpen] = useState(false)

    return(
        <div className={styles.app_container}>
            <button className={styles.mobile_menu_button} onClick={()=> setSidebarOpen(!sidebarOpen)}>
                <Menu/>
            </button>
            <div className={`${styles.overlay} ${sidebarOpen ? styles.open : ''}`}  onClick={() => setSidebarOpen(false)}/>
            <div className={`${styles.sidebar} ${sidebarOpen ?styles.open : ''}`}>
                <Sidebar/>
            </div>
            <div className={styles.main_content}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.header}>
                            <div className={styles.header_title}>
                                <Shield className={styles.title_icon} />
                                <h1 className={styles.title}>Gestão Contas</h1>
                            </div>
                            <div className={styles.header_search}>
                                <input type="text"
                                placeholder="Buscar por titular ou número..."
                                className={styles.search_input}
                                >

                                </input>
                                <Search className={styles.search_icon} />
                            </div>
                        </div>

                        <div className={styles.accounts_list}>
                            <div className={styles.account_item}>
                                <div className={styles.account_header}>
                                    <div className={styles.account_info}>
                                        <h1>jose</h1>
                                        <p>2342</p>
                                    </div>

                                    <div className={styles.status_button}>
                                        <button>Em análise</button>
                                        <button>Segura</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} export default GestaoContas
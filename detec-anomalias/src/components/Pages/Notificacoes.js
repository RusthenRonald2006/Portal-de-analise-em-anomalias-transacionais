import {useState} from "react"
import styles from "./Notificacoes.module.css"
import Sidebar from "../layout/Sidebar"
import {
    Bell,
    AlertTriangle,
    RefreshCw,
    Rocket,
    Filter,
    Search,
    ChevronDown,
    CheckCircle2,
    Clock,
    XCircle,
    Eye
  } from 'lucide-react';
import { Menu } from 'lucide-react';
function Notificacoes(){

    const mockData = [
        {
            id:"1",
            type:'suspicious', //Significado: Algo suspeito foi detectado.
            title: 'Transação de alto valor detectada',
            description: 'Transferência acima do padrão',
            time:'2024-03-15T14:30:00',
            severity: "alto",
            status:"novo"
        },
        {
            id: '2',
            type:'pattern', //Significado: Um padrão incomum foi identificado.
            title: 'Múltiplas transações pequenas',
            description: 'Padrão de fragmentação detectado nas últimas 2 horas',
            timestamp: '2024-03-15T13:45:00',
            severity: 'medium',
            status: 'análise'
        },
        {
            id: '3',
            type:'account', //Significado: Algo relacionado à conta do usuário foi detectado.
            title: 'Nova conta com movimentação suspeita',
            description: 'Alto volume de transações em conta recém-criada',
            timestamp: '2024-03-15T12:15:00',
            severity: 'alto',
            status: 'novo'
        },
        {
            id: '4',
            type:'suspicious', //Significado: Algo suspeito foi detectado.
            title: 'Tentativa de acesso bloqueada',
            description: 'Múltiplas tentativas de login de IP suspeito',
            timestamp: '2024-03-15T11:30:00',
            severity: 'baixo',
            status: 'resolvido'
        }
    ]

    const getTypeIcon = (type)=>{
        switch (type){
            case 'suspicious':
                return <AlertTriangle className="icon_alert" />;
            case 'pattern':
                return <RefreshCw className="icon_pattern" />;
            case 'account':
                return <Rocket className="icon-account" />;
            default :
                return null
        }
    }


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
                    {/*header*/}
                    <div className={styles.header_section}>
                        <div className={styles.header_content}>
                            <h1 className={styles.title}>Central de Alertas</h1>
                            <div className={styles.container_filter}>
                                <button className={styles.filter_button}>
                                    <Filter className={styles.filter_icon} />
                                    Filtros
                                    <ChevronDown className={styles.dropdown_icon} />
                                </button>
                                <div className={styles.search_bar}>
                                    <Search className={styles.search_icon} />
                                    <input
                                        type="text"
                                        placeholder="Procurar Alertas..."
                                        className={styles.search_input}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                     {/*alerts list*/}
                    <div className={styles.alert_list}>
                        <div className={styles.alerts_box}>
                            {mockData.map((alert)=>(
                                <div
                                key={alert.id} className={styles.alert_item}>
                                    <div className={styles.alert_row}>
                                        <div className={styles.alert_info}>
                                            <div>
                                                {getTypeIcon(alert.type)}
                                            </div>
                                            <div className={styles.alert_text}>
                                                <h1>{alert.title}</h1>
                                                <p>{alert.description}</p>
                                            </div>
                                        </div>
                                        <div className={styles.alert_actions}>
                                            <h3>actions</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Notificacoes
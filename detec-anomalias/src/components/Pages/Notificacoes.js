import {useEffect, useState} from "react"
import styles from "./Notificacoes.module.css"
import Sidebar from "../layout/Sidebar"
import {Bell,AlertTriangle,RefreshCw,Rocket,Filter,Search,ChevronDown,CheckCircle2,Clock,
XCircle,Eye,Circle} from 'lucide-react';
import { Menu } from 'lucide-react';
import api from "../../services/api"
function Notificacoes(){

    const mockData = []

    const getTypeIcon = (type)=>{
        switch (type){
            case 'suspicious':
                return <AlertTriangle className={styles.icon_alert} />;
            case 'pattern':
                return <RefreshCw className={styles.icon_pattern} />;
            case 'account':
                return <Rocket className={styles.icon_account} />;
            default :
                return null
        }
    }

    const getSeverityIcon = (severity)=>{
        switch (severity){
            case 'baixo':
                return styles.severity_low
            case 'medio':
                return styles.severity_medium
            case 'alto':
                return styles.severity_hight
        }
    }

    const getStatusIcon = (status)=>{
        switch (status){
            case 'novo':
                return  <Bell className={styles.new_icon}/>
            case 'analise':
                return <Clock className={styles.analyse_icon}/>
            case 'resolvido':
                return <CheckCircle2 className={styles.resolved_icon}/>
            default :
                return ''
        }
    }

    const formatDate = (dateString)=>{
        return new Date(dateString).toDateString('pt-BR',{
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }


    useEffect(()=>{
        const buscarNotificacoes = async ()=>{
        try{
            const response = await api.get('/notificacoes')
            setNotificacoes(response.data)
        } catch (error){
            console.log("erro ao buscar notificações",error)
        }
    }
    },[])
    

    //para guardar alertar clicado pelo usuário
    const [selectAlert,setSelectAlert]=useState(null)
    const [Notificacoes,setNotificacoes]=useState([])
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
                {/*header*/ }
                <header className={styles.header}>
                    <div className={styles.header_content}>
                        <h1 className={styles.header_title}>Central de Alertas</h1>
                        <div className={styles.header_actions}>
                            <button className={styles.filter_button}>
                                <Filter />
                                Filtros
                                <ChevronDown />
                            </button>
                            <div className={styles.search_container}>
                                <Search className={styles.search_icon} />
                                <input
                                    type="text"
                                    placeholder="Buscar alertas..."
                                    className={styles.search_input}
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/*main*/ }
                <main className={styles.main_not}>
                    <div className={styles.alerts_container}>

                        {mockData.length === 0 ?(
                            <div className={styles.empty_alerts}>
                                <p>Nenhuma notificação encontrada no momento.</p>
                            </div>
                        ):(
                            mockData.map((alert)=>(
                            <div className={styles.alert_item} key={alert.id} onClick={()=>setSelectAlert(alert)}>
                                <div className={styles.alert_content}>
                                    <div className={styles.alert_left}>
                                        <div className={styles.alert_icon}>
                                            {getTypeIcon(alert.type)}
                                        </div>
                                        <div className={styles.alert_details}>
                                            <h3>{alert.title}</h3>
                                            <p>{alert.description}</p>
                                            <div className={styles.alert_info}>
                                                <span className={styles.alert_timestamp}>
                                                    {formatDate(alert.timestamp)}
                                                </span>
                                                <span className={`${getSeverityIcon(alert.severity)} ${styles.severity_tag}`}> 
                                                    {alert.severity === 'baixo' ? 'Baixo': alert.severity ==='medio' ? 'Médio':'Alto'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.alert_actions}>
                                        {getStatusIcon(alert.status)}
                                        <button className={styles.action_button}>
                                            <Eye/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        )}
                    </div>
                </main>

                {selectAlert &&(
                    <div className={styles.modal_overlay}>
                        <div className={styles.modal_content}>
                            <div className={styles.modal_header}>
                                <h2>Detalhes do Alerta</h2>
                                <button
                                onClick={()=>setSelectAlert(null)}><XCircle/></button>
                            </div>
                            <div className={styles.modal_body}>
                                <div className={styles.alert_header}>
                                    <div>{getTypeIcon(selectAlert.type)}</div>
                                    <div>
                                        <h3>{selectAlert.title}</h3>
                                        <p>{selectAlert.description}</p>
                                    </div>
                                </div>

                                <div className={styles.alert_info_modal}>
                                    <div className={styles.info_card}>
                                        <p className={styles.info_p}>Severidade</p>
                                        <p className={` ${styles.info_value} ${getSeverityIcon(selectAlert.severity)}`}>
                                            {selectAlert.severity === 'baixo'? 'Baixo': selectAlert.severity === 'medio'?'Médio':'Alto'}
                                        </p>
                                    </div>
                                    <div className={styles.info_card}>
                                        <p className={styles.info_p}>Status</p>
                                        <p className={styles.info_value}>
                                            {getStatusIcon(selectAlert.status)}
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.modal_actions}>
                                    <button className={styles.button_secondary}>
                                        Ignorar
                                    </button>
                                    <button className={styles. button_primary}>
                                        Marcar como resolvido
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
               </div>
            </div>
    )
} export default Notificacoes
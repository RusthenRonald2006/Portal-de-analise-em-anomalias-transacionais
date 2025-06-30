import {useEffect, useState, useRef} from "react"
import { toast } from "react-toastify";
import styles from "./Notificacoes.module.css"
import Sidebar from "../layout/Sidebar"
import {Bell,AlertTriangle,RefreshCw,Rocket,Filter,Search,ChevronDown,CheckCircle2,Clock,
XCircle,Eye,Circle} from 'lucide-react';
import Loading from "../layout/Loading"
import { Menu } from 'lucide-react';
import api from "../../services/api"
function Notificacoes(){

    const getSeverityIcon = (severity)=>{
        switch (severity){
            case 'baixa':
                return styles.severity_low
            case 'media':
                return styles.severity_medium
            case 'alta':
                return styles.severity_hight
        }
    }

    const getStatusIcon = (status)=>{
        switch (status){
            case 'novo':
                return  <Bell className={styles.new_icon}/>
            case 'em_analise':
                return <Clock className={styles.analyse_icon}/>
            case 'resolvido':
                return <CheckCircle2 className={styles.resolved_icon}/>
            default :
                return ''
        }
    }

    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleString('pt-BR',{
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const notificacoesAnteriores = useRef([])

    const buscarNotificacoes = async ()=>{
        try{
            setLoading(true)
            const response = await api.get('/notificacoes')
            const novas = response.data

            if (notificacoesAnteriores.current.length > 0){
                if(novas.length > notificacoesAnteriores.current.length){
                    const nova = novas[0]
                    toast.info("Transação suspeita identificada")
                }
            }
            notificacoesAnteriores.current = novas
            setNotificacoes(novas)
        } catch (error){
            console.log("erro ao buscar notificações",error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        buscarNotificacoes();
        const intervalo = setInterval(buscarNotificacoes, 10000)
        return () => clearInterval(intervalo)
    },[])
    


    //para guardar alertar clicado pelo usuário
    const [selectAlert,setSelectAlert]=useState(null)
    const [Notificacoes,setNotificacoes]=useState([])
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const [loading,setLoading] = useState(true)
    const [showfilter,setShowFilter] = useState(false)

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
                        <div>
                            <h1 className={styles.header_title}>Central de Alertas</h1>
                            <div>
                                <button className={styles.filter_button} onClick={()=>setShowFilter(!showfilter)}>
                                    <Filter/> Filtros Avançados
                                </button>
                                {showfilter && (
                                    <div className={styles.filter_container}>
                                        <div className={styles.filter_group}>
                                            <input type="text" placeholder="Conta"></input>
                                            <select>
                                                <option value="">Todos os status</option>
                                                <option value="Novo">Novo</option>
                                                <option value="Análise">Análise</option>
                                                <option value="Resolvido">Resolvido</option>
                                            </select>
                                        </div>
                                        <div className={styles.filter_group}>
                                            <input type="date"></input>
                                            <input type="date"></input>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.header_actions}>
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
                        {Notificacoes.length === 0 ?(
                            <div className={styles.empty_alerts}>
                                <p>Nenhuma notificação encontrada no momento.</p>

                            </div>
                        ):(
                            Notificacoes.map((alert)=>(
                            <div className={styles.alert_item} key={alert._id} onClick={()=>setSelectAlert(alert)}>
                                <div className={styles.alert_content}>
                                    <div className={styles.alert_left}>
                                        <div className={styles.alert_icon}>
                                            {/*Fixo por enquanto*/}
                                            <AlertTriangle/>
                                        </div>
                                        <div className={styles.alert_details}>
                                            <h3>{alert.mensagem}</h3>
                                            <p>ID transação: {alert.transacao_id}</p>
                                            <div className={styles.alert_info}>
                                                <span className={styles.alert_timestamp}>
                                                    {formatDate(alert.data)}
                                                </span>
                                                <span className={`${getSeverityIcon(alert.nivel_risco)} ${styles.severity_tag}`}> 
                                                    {alert.nivel_risco === 'baixa'
                                                    ? 'Baixo'
                                                    : alert.nivel_risco === 'media'
                                                    ? 'Médio'
                                                    : 'Alto'}
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
                                    {/*fixo por enquanto*/ }
                                    <div><AlertTriangle/></div>
                                    <div>
                                        <h3>{selectAlert.mensagem}</h3>
                                        <p>ID transação: {selectAlert.transacao_id}</p>
                                    </div>
                                </div>

                                <div className={styles.alert_info_modal}>
                                    <div className={styles.info_card}>
                                        <p className={styles.info_p}>Severidade</p>
                                        <p className={` ${styles.info_value} ${getSeverityIcon(selectAlert.nivel_risco)}`}>
                                            {selectAlert.nivel_risco === 'baixa'? 'Baixo': selectAlert.nivel_risco === 'media'?'Médio':'Alto'}
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
                                    <button className={styles.button_secondary}
                                    onClick={()=>{
                                        toast.info("Marcado como falso positivo");
                                        setSelectAlert(null);
                                        }}>
                                        Falso positivo
                                    </button>
                                    <button className={styles. button_primary} onClick={()=>{
                                        toast.success("Alerta marcado como resolvido!");
                                        setSelectAlert(null);
                                    }}>
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

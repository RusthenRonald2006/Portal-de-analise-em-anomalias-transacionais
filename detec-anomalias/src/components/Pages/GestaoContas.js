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
            titular:"Rusthen Ronald",
            transacoesSuspeitas : 3 ,
            ultimaAtividade:{
                data:"2024-03-15",
                valor: 15000.00
            },
            status:"suspeita"
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

    const getStatusIcon = (status) => {
        switch (status){
            case "suspeita":
                return <AlertTriangle size={24} color="red" />;
            case "análise":
                return <Clock size={24} color="orange" />;
            case "normal":
                return <CheckCircle size={24} color="green" />;
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
                            {contas.map((contas)=>(
                                <div className={styles.account_item} key={contas.id}>
                                <div className={styles.account_header}>
                                    <div className={styles.account_info}>
                                        {getStatusIcon(contas.status)}
                                        <div>
                                            <h2>{contas.titular}</h2>
                                            <p>{contas.numero}</p>
                                        </div>
                                    </div>

                                    <div className={styles.status_button}>
                                        <button>Em análise</button>
                                        <button>Segura</button>
                                    </div>
                                </div>
                                
                                <div className={styles.accounts_details}>
                                    <div className={styles.details_box}>
                                        <p className={styles.details_title}>Transações suspeitas</p>
                                        <p className={styles.details_value}>{contas.transacoesSuspeitas}</p>
                                    </div>
                                    <div className={styles.details_box}>
                                        <p className={styles.details_title}>Ultimas Atividades</p>
                                        <p className={styles.details_value}>R${contas.ultimaAtividade.valor.toFixed(2)}</p>
                                        <p className={styles.details_date}>{new Date(contas.ultimaAtividade.data).toLocaleDateString("pt-br")}</p>
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
} export default GestaoContas
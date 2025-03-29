import {useState,useEffect} from "react"
import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
import { Search, AlertTriangle, CheckCircle, Clock, Filter } from 'lucide-react';

function GestaoTransacoes(){

      const [transactions, setTransactions] = useState([]);
      const [filters,setFiltera] = useState({
        account: '',
        startDate: '',
        endDate: '',
        minAmount: '',
        maxAmount: '',
        status: ''
      }
      )
    
      // Simulando dados com useEffect, mas no futuro os dados virão da API
      useEffect(() => {
        const mockData = [
          { id: "1", account: "1234-5", amount: 1500.0, status: "normal", date: "2024-03-10" },
          { id: "2", account: "1234-6", amount: 50000.0, status: "suspicious", date: "2024-03-11" },
          { id: "3", account: "1234-7", amount: 750.0, status: "analyzing", date: "2024-03-12" },
        ];
        setTransactions(mockData);
      }, []);

    
    const [showfilter,setShowFilter]=useState(false)
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
                <h1>Gestão Transações</h1>
                <div className={styles.filter_section}>
                    <button className={styles.filter_button} onClick={()=>setShowFilter(!showfilter)}>
                        <Filter /> Filtros Avançados
                    </button>
                    {showfilter &&(
                    <div className={styles.filter_container}>
                        <div className={styles.filter_group}>
                        <input
                            type="text"
                            placeholder="Conta"
                            />
                            <input
                            type="date"
                            />
                            <input
                            type="date"
                            />
                        </div>
                        <div className={styles.filter_group}>
                        <input
                            type="number"
                            placeholder="Valor Mínimo"
                        />
                        <input
                            type="number"
                            placeholder="Valor Máximo"
                        />
                        <select
                            
                        >
                            <option value="">Todos os Status</option>
                            <option value="normal">Normal</option>
                            <option value="suspicious">Suspeita</option>
                            <option value="analyzing">Em Análise</option>
                        </select>
                        </div>
                    </div>
                    )}
                </div>
                    
                <div className={styles.table_container}>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Conta</th>
                                <th>Valor</th>
                                <th>Status</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
} export default GestaoTransacoes
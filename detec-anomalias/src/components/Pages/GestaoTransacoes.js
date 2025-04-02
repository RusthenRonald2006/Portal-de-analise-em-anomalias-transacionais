import {useState,useEffect} from "react"
import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
import { Search, AlertTriangle, CheckCircle, Clock, Filter } from 'lucide-react';

function GestaoTransacoes(){

      const [transactions, setTransactions] = useState([]);
      const [filters,setFilters] = useState({
        account: '',
        startDate: '',
        endDate: '',
        minAmount: '',
        maxAmount: '',
        status: ''
      }
      )

      const handleFilterChange =(key,value) => {
        setFilters(prev => ({
            ...prev,  //copia estado anterior
            [key]:value // // Atualiza a chave específica com o novo valor
        }))
      }
      useEffect(() => {
        console.log("Estado atual dos filtros:", filters);
      }, [filters]);
      
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
                            value={filters.account}
                            onChange={(e)=> handleFilterChange('account',e.target.value)}
                            />
                            <input
                            type="date"
                            value={filters.startDate}
                            onChange={(e)=> handleFilterChange('startDate',e.target.value)}
                            />
                            <input
                            type="date"
                            value={filters.endDate}
                            onChange={(e)=>handleFilterChange('endDate',e.target.value)}
                            />
                        </div>
                        <div className={styles.filter_group}>
                        <input
                            type="number"
                            placeholder="Valor Mínimo"
                            value={filters.minAmount}
                            onChange={(e)=>handleFilterChange('minAmount',e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Valor Máximo"
                            value={filters.maxAmount}
                            onChange={(e)=>handleFilterChange('maxAmount',e.target.value)}
                        />
                        <select
                            value={filters.status}
                            onChange={(e)=>handleFilterChange('status',e.target.value)}
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


/*Como isso funciona na prática?
handleFilterChange('account', e.target.value): Quando o usuário digita no campo de Conta, a função é chamada. O parâmetro key recebe a string 'account', e o value é o que o usuário digitou no campo.

O setFilters então atualiza o estado filters com a chave account e o valor digitado, sem alterar os outros filtros.

Resumo dos parâmetros:
key é o nome da chave dentro do estado filters (ex: 'account', 'startDate', 'status' etc.).

value é o valor que o usuário inseriu em cada campo (ex: o número da conta, uma data, um valor numérico, etc.).

Esses dois parâmetros permitem que você atualize dinamicamente o estado dos filtros à medida que o usuário interage com os inputs. A função handleFilterChange é reutilizável para todos os campos, fazendo a atualização do estado de forma eficiente.*/
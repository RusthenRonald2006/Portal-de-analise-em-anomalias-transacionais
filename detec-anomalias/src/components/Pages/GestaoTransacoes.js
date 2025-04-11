import {useState,useEffect} from "react"
import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
import { Search, AlertTriangle, CheckCircle, Clock, Filter } from 'lucide-react';

function GestaoTransacoes(){
        const [showfilter,setShowFilter]=useState(false)
        const [sidebarOpen,setSidebarOpen] = useState(false)
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
            [key]:value //  Atualiza a chave específica com o novo valor
        }))
      }
      useEffect(() => {
        console.log("Estado atual dos filtros:", filters);
      }, [filters]);
      
      // Simulando dados com useEffect, mas no futuro os dados virão da API
      useEffect(() => {
        const mockData = [
          { id: "1", account: "1234-5", amount: 1500.0, status: "normal", date: "2024-03-10" },
          { id: "2", account: "1234-6", amount: 50000.0, status: "suspeita", date: "2024-03-11" },
          { id: "3", account: "1234-7", amount: 750.0, status: "análise", date: "2024-03-12" },
        ];
        setTransactions(mockData);
      }, []);

      //Aplicando filtros dos dados
      //Os filtros são aplicados usando o método .filter() do JavaScript, que percorre o array transactions e retorna apenas os itens que atendem aos critérios especificados.
      const filteredTransactions = transactions.filter(transaction => {
        return (
          (!filters.account || transaction.account.includes(filters.account)) &&
          (!filters.startDate || transaction.date >= filters.startDate) &&
          (!filters.endDate || transaction.date <= filters.endDate) &&
          (!filters.minAmount || transaction.amount >= Number(filters.minAmount)) &&
          (!filters.maxAmount || transaction.amount <= Number(filters.maxAmount)) &&
          (!filters.status || transaction.status === filters.status)
        );
      });
      
       //Função pra retornar os icones de acordo com status da transação 

       const gestStatusicons = (status) =>{
        switch (status){
            case 'normal':
                return <CheckCircle className={styles.status_icon} color="green" />;
            case 'suspeita':
                return <AlertTriangle className={styles.status_icon}  color="red"/>
            case 'análise':
                return <Clock className={styles.status_icon}  color="orange"/>
        }
      }


      //fnção que vai atualizar o status da transação
      const handleMarkSuspicious =(id)=>{
            setTransactions((prevTransactions)=>
                prevTransactions.map((transaction)=>
                    transaction.id === id? {...transaction, status:"suspeita"} : transaction
                )
            ) //comparamos pra encontrar a transação correta
      }

    return(
        <div className={styles.app_container}>
            <button className={styles.mobile_menu_button} onClick={()=> setSidebarOpen(!sidebarOpen)}>
                <Menu/>
            </button>
            <div className={`${styles.overlay} ${sidebarOpen ? styles.open : ''}`}  onClick={() => setSidebarOpen(false)}/>
            <div className={`${styles.sidebar} ${sidebarOpen ?styles.open : ''}`}>
                <Sidebar/>
            </div>
            <  div className={styles.main_content}>
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
                            <option value="suspeita">Suspeita</option>
                            <option value="análise">Em Análise</option>
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
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.length >0 ?(
                                filteredTransactions.map(transaction =>(
                                    <tr key={transaction.id}>
                                        <td>{transaction.id}</td>
                                        <td>{transaction.account}</td>
                                        <td>R$ {transaction.amount.toFixed(2)}</td>
                                        <td className={styles.icons}> {gestStatusicons(transaction.status)}    {transaction.status}</td>
                                        <td>{new Date(transaction.date).toLocaleDateString("pt-BR")}</td>
                                        <td>
                                            {transaction.status != "suspeita" &&
                                            (<button className={styles.suspicious_button} onClick={()=>handleMarkSuspicious(transaction.id)}>
                                                Marcar como Suspeita
                                            </button>)
                                            }
                                        </td>
                                    </tr>
                                ))
                            ):(
                                <tr>
                                    <td colSpan={5} style={{ textAlign: "center" }}>Nenhuma transação encontrada</td>
                                </tr>
                            )}
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
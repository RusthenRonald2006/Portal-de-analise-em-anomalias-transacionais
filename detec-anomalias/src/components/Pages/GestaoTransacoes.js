import {useState,useEffect} from "react"
import styles from "./GestaoTransacoes.module.css"
import Sidebar from "../layout/Sidebar"
import { Menu } from 'lucide-react';
import Loading from "../layout/Loading"
import { Search, AlertTriangle, CheckCircle, Clock, Filter } from 'lucide-react';

function GestaoTransacoes(){
        const [showfilter,setShowFilter]=useState(false)
        const [sidebarOpen,setSidebarOpen] = useState(false)
        const [loading,setLoading] = useState(true);
        const [pagina,setPagina] = useState(1);
        const [limite,setLimite] = useState(50)

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
            ...prev, 
            [key]:value 
        }))
      }
      
      //aplocando os filtros
      const filteredTransactions = transactions.filter(transaction => {
        return (
          (!filters.account || transaction.account.includes(filters.account.toLowerCase().trim())) &&
          (!filters.startDate || transaction.date >= filters.startDate) &&
          (!filters.endDate || transaction.date <= filters.endDate) &&
          (!filters.minAmount || transaction.amount >= Number(filters.minAmount)) &&
          (!filters.maxAmount || transaction.amount <= Number(filters.maxAmount)) &&
          (!filters.status || transaction.status === filters.status)
        );
      });

      useEffect(() => {
        console.log("Estado atual dos filtros:", filters);
      }, [filters]);
      
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


      const carregarTransacoes = async () => {
            setLoading(true);

            const skip = (pagina - 1) * limite;

            const params = new URLSearchParams({
                skip: skip.toString(),
                limit: limite.toString(),
                ...(filters.account && { conta: filters.account.toLowerCase().trim() }),
                ...(filters.status && { status: filters.status }),
                ...(filters.minAmount && { valor_min: filters.minAmount }),
                ...(filters.maxAmount && { valor_max: filters.maxAmount }),
                ...(filters.startDate && filters.endDate && {
                data_inicio: filters.startDate,
                data_fim: filters.endDate
            })
        });

        try{
            const resposta = await fetch("https://antifraude-api.onrender.com/transacoes?${params}")
            const json = await resposta.json()

            const formatadas = json.dados.map(t=>({
                id: t.transacao_id,
                account: String(t.conta).toLowerCase().trim(),
                amount:t.transacao_valor,
                status: t.status || "análise",
                date: t.transacao_data,
            }))

            setTransactions(formatadas);

        } catch(error){
            console.error("Erro ao carregar transações:", error);
        } finally{
            setLoading(false);
        }
    }
      useEffect(()=>{
        carregarTransacoes();
      },[pagina, limite , filters])

      const processarPendentes = async ()=>{
            try{
                const resposta =await fetch("https://antifraude-api.onrender.com/transacoes/processar_pendentes",{
                    method: "POST",
                });

                const resultado = await resposta.json();

                //recarregando
                carregarTransacoes();
                
            } catch(error){
                console.log("Erro ao processar transações:",error);
            }
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
                    <div className={styles.container_buttons}>
                        <button className={styles.filter_button} onClick={()=>setShowFilter(!showfilter)}>
                            <Filter /> Filtros Avançados
                        </button>
                        <div>
                            <button className={styles.filter_button} onClick={processarPendentes}>Processar Transações </button>
                        </div>
                    </div>
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
                {loading && <div className={styles.container_loading}><Loading/></div>}
                <div className={styles.table_container}>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Conta</th>
                                <th>Valor</th>
                                <th>Data/hora</th>
                                <th>Status</th>     
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.length >0 ?(
                                filteredTransactions.map(transaction =>(
                                    <tr key={transaction.id}>
                                        <td>{transaction.id}</td>
                                        <td>{transaction.account}</td>
                                        <td>R$ {transaction.amount.toFixed(2)}</td>
                                        <td>{new Date(transaction.date).toLocaleDateString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</td>
                                        <td className={styles.icons}> {gestStatusicons(transaction.status)} {transaction.status}</td>       
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

                <div className={styles.paginacao}>
                    <label>
                        Mostrar:&nbsp;
                        <select value={limite} onChange={(e)=>{setLimite(Number(e.target.value)); setPagina(1);}}>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={60}>60</option>
                        </select>&nbsp;linhas por página
                    </label>
                    <div className={styles.pag_buttons}>
                        <button onClick={()=> setPagina(p=>Math.max(p-1,1))} disabled={pagina === 1}>Anterior</button>
                        <span style={{color:"black",fontWeight:"normal"}}>Página {pagina}</span>
                        <button onClick={()=>setPagina(p=>p+1)}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
} export default GestaoTransacoes

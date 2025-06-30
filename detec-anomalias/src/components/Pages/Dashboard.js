import React, { use } from "react";
import styles from "./Dashboard.module.css"
import { useState,useEffect } from "react";
import { useRef } from "react";
import Navbar from "../layout/Sidebar"
import logobanese from '../../components/img/logo banese.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCoins, faEye, faCircleXmark ,faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Users, DollarSign, ShoppingCart, TrendingUp,Filter,search_button, Search,Bell,AlertTriangle,Clock,CheckCircle,CheckCircle2 } from 'lucide-react'
import { data } from "react-router-dom";
import Loading from "../layout/Loading";
import { toast } from "react-toastify";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { BadgeCheck } from 'lucide-react'


function Dashboard(){

    const [loading,setLoading] = useState(false);
    const primeiraVerificacao = useRef(true);
    const notificacoesAnteriores = useRef([])
    const [showfilter,setShowFilter] =useState(false)
    const [dataInicio,setDataInicio] =useState("")
    const [dataFim,setDataFim] =useState("")
    const [notificacoesRecentes,setNotificacoesRecentes] =useState([])
    const [metricas,setMetricas] =useState({
        quantidade_transacoes:0,
        transacoes_suspeitas:0,
        perc_suspeitas:0,
        valor_medio_suspeitas:0,
        transacoes_nao_analisadas:0,
        perc_nao_analisadas:0,
        transacoes_analisadas: 0,
        perc_analisadas: 0,
    }); 

    //com filtros
    const buscarMetricas = async ()=>{
        if (!dataInicio || !dataFim){
            alert("Preencha as datas")
            return;
        }

        try{
            setLoading(true);
            const resposta = await fetch(`https://antifraude-api.onrender.com/dashboard/quantidade_transacoes?periodo_inicio=${dataInicio}&periodo_fim=${dataFim}`)
            const dados = await resposta.json();
            console.log("Dados do dashboard:", dados);
            setMetricas(prev =>(
                {...prev,quantidade_transacoes:dados.quantidade_transacoes}
            ));
            await buscarTransacoesSuspeitas()
            await buscarValorMedio()
            await buscarTransacoesNaoAanalisadas()
            await buscarTransacoesAnalisadas()

        } catch (error){
            console.error("Erro ao buscar métricas",error);
            alert("Erro ao carregar dados do dashboard")
        }finally{
            setLoading(false);
        }
    }
    //sem filtros
    const buscarMetricasTotais = async ()=>{
        try{
            const resposta = await fetch("https://antifraude-api.onrender.com/dashboard/quantidade_transacoes")
            const dados = await resposta.json()
            setMetricas(prev =>(
                {...prev,quantidade_transacoes:dados.quantidade_transacoes}
            ))
        } catch(error){
            console.error("Erro ao buscar métricas totais",error);
        }
    }
    useEffect(()=>{
        buscarMetricasTotais()
        buscarTransacoesSuspeitas()
        buscarValorMedio()
        buscarTransacoesNaoAanalisadas()
        buscarTransacoesAnalisadas()
    },[]);

    const buscarTransacoesSuspeitas = async ()=>{
        try{
            const url = dataInicio && dataFim 
            ? `https://antifraude-api.onrender.com/dashboard/transacoes_suspeitas?data_inicio=${dataInicio}T00:00:00&data_fim=${dataFim}T23:59:59`
            : "https://antifraude-api.onrender.com/dashboard/transacoes_suspeitas";

            const resposta = await fetch(url);
            const dados = await resposta.json();
            setMetricas(prev=>({
                ...prev,transacoes_suspeitas:dados.total_suspeitas,
                perc_suspeitas:dados.perc_suspeitas
            }))
        } catch(error){
            console.error("Erro ao buscar transações suspeitas",error);
        }
    }
    const buscarValorMedio = async () => {
        try {
            const url = dataInicio && dataFim
                ? `https://antifraude-api.onrender.com/dashboard/valor_medio_suspeitas?data_inicio=${dataInicio}T00:00:00&data_fim=${dataFim}T23:59:59`
                : "https://antifraude-api.onrender.com/dashboard/valor_medio_suspeitas";

            const resposta = await fetch(url);
            const dados = await resposta.json();
            setMetricas(prev => ({
                ...prev,
                valor_medio_suspeitas: dados.valor_medio
            }));
        } catch (error) {
            console.error("Erro ao buscar valor médio:", error);
        }
    };

    const buscarTransacoesNaoAanalisadas = async ()=>{
        try{
            const url = dataInicio && dataFim ? `https://antifraude-api.onrender.com/dashboard/transacoes_nao_analisadas?data_inicio=${dataInicio}T00:00:00&data_fim=${dataFim}T23:59:59`: "https://antifraude-api.onrender.com/dashboard/transacoes_nao_analisadas"
            const resposta = await fetch(url)
            const dados = await resposta.json()

            setMetricas(prev =>({
                ...prev,transacoes_nao_analisadas:dados.total_nao_analisadas,
                perc_nao_analisadas:dados.perc_nao_analisadas
            }))
        } catch(error){
            console.error("Erro ao buscar transações não analisadas", error);
        }
    }

    const buscarTransacoesAnalisadas = async ()=>{
        try{
            const url = dataInicio && dataFim
            ? `https://antifraude-api.onrender.com/dashboard/transacoes_analisadas?data_inicio=${dataInicio}T00:00:00&data_fim=${dataFim}T23:59:59`
            : "https://antifraude-api.onrender.com/dashboard/transacoes_analisadas";

            const resposta = await fetch(url);
            const dados = await resposta.json();
            setMetricas(prev => ({
            ...prev,
            transacoes_analisadas: dados.total_analisadas,
            perc_analisadas: dados.perc_analisadas
            }));
        } catch(error){
            console.error("Erro ao buscar transações analisadas", error);
        }
    }

        useEffect(()=>{
            const buscarUltimasNotificacoes = async ()=>{
                try{
                    const resposta = await fetch("https://antifraude-api.onrender.com/notificacoes/ultimas?qtd=3")

                    const dados = await resposta.json();
                    setNotificacoesRecentes(dados);             
                } catch (error){
                    console.error("Erro ao buscar notificações", error);
                }
        }
        
            const verificarNovaNotificacao = async ()=>{
                try{
                    const response = await fetch("https://antifraude-api.onrender.com/notificacoes/ultimas?qtd=1")
                    const dados = await response.json();
                    const novaMaisRecente = dados[0]

                    if (primeiraVerificacao.current) {
                        notificacoesAnteriores.current = [novaMaisRecente];
                        primeiraVerificacao.current = false;
                        return;
                    }

                    const idAnterior = notificacoesAnteriores.current[0]?._id;
                    if (novaMaisRecente && idAnterior !== novaMaisRecente._id) {
                        toast.info("Nova transação suspeita identificada!");
                        notificacoesAnteriores.current = [novaMaisRecente];
                    } 
                 }  catch (error) {
                        console.error("Erro ao verificar nova notificação", error);
                }
            }
            buscarUltimasNotificacoes();
            verificarNovaNotificacao();
            const intervalo = setInterval(verificarNovaNotificacao,10000);
            return () => clearInterval(intervalo);
    },[]);
    
        

    const getIconByRisco = (risco) =>{
        switch (risco){
            case "alto": return <AlertTriangle color="red" />;
            case "médio": return <Clock color="orange" />;
            case "baixo": return <CheckCircle color="green" />;
            default: return <Users />;
        }
    }

    const getIconByStatus = (status) => {
        switch(status){
            case "novo":
                return  <Bell className={styles.status_novo}/>
            case "em_analise":
                return <Clock className={styles.status_analise}/> 
            case "resolvido":
                return <CheckCircle2 className={styles.status_resolvido}/>
            default:
                return null;
        }
    }

    const cards = [
        { title: "Total de Transações", value: metricas.quantidade_transacoes.toLocaleString("pt-BR"), icon: faUser, colorClass: styles.iconBlue },
        { title: "Transações suspeitas", value: `${metricas.transacoes_suspeitas.toLocaleString("pt-BR")} (${metricas.perc_suspeitas}%)`, icon:faChartSimple , colorClass: styles.iconGreen },
        { title: "Transações analisadas", value: `${metricas.transacoes_analisadas.toLocaleString("pt-BR")} (${metricas.perc_analisadas}%)`, icon: faCheckCircle, colorClass: styles.iconRed },
        { title: "Transações não analisadas", value: `${metricas.transacoes_nao_analisadas.toLocaleString("pt-BR")} (${metricas.perc_nao_analisadas}%)`, icon: faCircleXmark, colorClass: styles.iconRed },
        { title: "Valor médio das transações suspeitas", value: metricas.valor_medio_suspeitas.toLocaleString("pt-BR",{
            style:"currency",
            currency:"BRL"
        }), icon: faCoins , colorClass: styles.iconPurple },
      ];


      
    return(
        <div>
           <h1 className={styles.dashboard_title}>Dashboard</h1>

           <button className={styles.filter_button} onClick={()=>setShowFilter(!showfilter)}>
               <Filter/> Filtros Avançados
           </button>

           {showfilter && (
            <div className={styles.filter_container}>
                <div className={styles.filter_group}>
                    <div className={styles.input}>
                        <label>Data de Inicio</label>
                        <input type="date"
                        onChange={(e)=>setDataInicio(e.target.value)}
                        value={dataInicio}
                        ></input>
                    </div>
                    <div className={styles.input}>
                        <label>Data Final</label>
                        <input type="date"
                        onChange={(e)=>setDataFim(e.target.value)}
                        value={dataFim}></input>
                    </div>
                    <button className={styles.search_button} onClick={buscarMetricas}>
                        {loading ? <Loading/> : "Buscar"}
                    </button>
                </div>
            </div>
           )}
           <div className={styles.cards_grid}>
                {cards.map((card,index)=>(
                    <div key={index} className={styles.card}>
                        <div className={styles.card_content}>
                            <div className={styles.card_info}>
                                <p>{card.title}</p>
                                <p>{card.value}</p>
                            </div>
                            <div className={`${styles.card_icon} ${card.colorClass}`}>
                                <FontAwesomeIcon icon={card.icon} />
                            </div>
                        </div>
                    </div>
                ))}
           </div>

           <div className={styles.grid_notifications}>
                <div className={styles.card_notifications}>
                    <h2 className={styles.card_notifications_title}> Atividades Recentes</h2>
                    <div className={styles.activity_list}>

                        {notificacoesRecentes.length === 0 ? (
                            <div className={styles.empty_message}>Nenhuma notificação recente encontrada</div>
                        ): (
                            notificacoesRecentes.map((notificacao,index)=>(
                            <div key={notificacao._id || index} className={styles.activity_item}>
                                <div className={styles.activity_icon}>
                                    {getIconByRisco(notificacao.nivel_risco)}
                                </div>
                                <div className={styles.activity_info}>
                                    <p>{notificacao.mensagem}</p>
                                    <div className={styles.container_status}>
                                        <p>{new Date(notificacao.data).toLocaleString("pt-BR", {
                                        hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit"
                                        })} </p>
                                        <p>{getIconByStatus(notificacao.status)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        )}
                        
                    </div>
                </div>
                <div>
                    
                </div>
           </div>
        </div>
        )
} export default Dashboard

import React from "react";
import styles from "./Dashboard.module.css"
import { useState } from "react";
import Navbar from "../layout/Sidebar"
import logobanese from '../../components/img/logo banese.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCoins, faEye, faCircleXmark ,faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Users, DollarSign, ShoppingCart, TrendingUp,Filter,search_button, Search } from 'lucide-react'
function Dashboard(){

    const [showfilter,setShowFilter] =useState(false)

    const cards = [
        { title: "Total de Transações (Este mês)", value: "5.320", icon: faUser, colorClass: styles.iconBlue },
        { title: "Transações suspeitas", value: "320 ", icon: faCoins, colorClass: styles.iconGreen },
        { title: "Total de Contas Investigadas", value: "38", icon: faChartSimple, colorClass: styles.iconPurple },
        { title: "Fraudes Confirmadas", value: "12", icon: faCircleXmark, colorClass: styles.iconRed },
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
                        <input type="date"></input>
                    </div>
                    <div className={styles.input}>
                        <label>Data Final</label>
                        <input type="date"></input>
                    </div>
                    <button className={styles.search_button} >
                        Buscar
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
                        {[1,2,3].map((_,index)=>( //1 parâmetro ( 1, 2, 3) não é usado
                            <div key={index} className={styles.activity_item}>
                                <div className={styles.activity_icon}>
                                    <Users/>
                                </div>
                                <div className={styles.activity_info}>
                                    <p>Novo usuário registrado</p>
                                    <p>Há {index + 1} horas</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Gráfico de Volume de Transações(Linha ou Barra)</h3>
                </div>
           </div>
        </div>
        )
} export default Dashboard
































/* <div className={styles.sidebar}>
<img src={logobanese} className={styles.logo_banese}></img>
<Navbar/>
</div>
<div className={styles.metrics}>
<div>
    <h1>Visão Geral das Transações</h1>
</div>
<div className={styles.container_cards}>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
        <h3>5.320 transações </h3>
        <p>Total  de Transações
        (Este mês)</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faEye} className={styles.icon} />
        <h3>( 320 casos identificados) </h3>
        <p>Transações suspeitas</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h3>38 contas suspeitas em análise </h3>
        <p>Total de Contas Investigadas</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.icon} />
        <h3>12 Fraudes Confirmadas neste período</h3>
        <p>Fraudes Confirmadas</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faCoins} className={styles.icon} />
        <h3>R$ 2.350.000,00 </h3>
        <p>Valor Total Movimentado</p>
    </div>
</div>
<div>
    <h1>Gráfico de Volume de Transações (Linha ou Barra)</h1>
</div>
<div>
    
</div>
</div>*/
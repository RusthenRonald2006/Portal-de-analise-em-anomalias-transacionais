import React, { useEffect, useState } from "react";
import axios from "axios";

function Transacoes() {
  const [transacoes, setTransacoes] = useState([]);

  // Fazendo a requisição à API do FastAPI
  useEffect(() => {
    axios.get("http://localhost:8000/transacoes")  // URL do backend FastAPI
      .then(response => {
        setTransacoes(response.data);  // Atualiza o estado com os dados da resposta
      })
      .catch(error => {
        console.error("Erro ao buscar transações:", error);
      });
  }, []);

  return (
    <div>
      <h1>Transações</h1>
      <ul>
        {transacoes.map(transacao => (
          <li key={transacao.id}>
            {transacao.conta}: {transacao.valor} ({transacao.tipo})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transacoes;

Projeto Antifraude – Frontend
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

 OBJETIVO:
-
Desenvolver uma interface web funcional e responsiva capaz de exibir, monitorar e facilitar a gestão de transações financeiras analisadas pelo sistema antifraude. A aplicação visa oferecer à equipe de controle uma visualização clara e interativa das transações suspeitas, seus respectivos níveis de risco e motivos de alerta, além de permitir filtros, buscas e ações sobre os dado

 ESCOPO:
-
A interface consome a API antifraude para apresentar os dados processados e permitir a navegação entre diferentes módulos como: dashboard de risco, listagem de transações, notificações de alerta, detalhes por conta e autenticação de usuários. O sistema é de uso web, voltado para uso interno por analistas da área de controle.

 INTRODUÇÃO:
 -
O frontend foi desenvolvido utilizando o framework React, em conjunto com bibliotecas modernas como Axios para consumo da API, Fetch e Material UI para estilização, e React Router para controle de rotas. Ele se comunica diretamente com a API desenvolvida em FastAPI, exibindo as informações analisadas pelos modelos de machine learning (Autoencoder, KMeans, XGBoost). A interface prioriza usabilidade, responsividade e clareza visual, permitindo que a equipe de controle tome decisões com base em dados visuais e textuais interpretáveis.

 BASE DE DADOS:
 -
A interface não armazena dados diretamente, mas consome os dados processados da API, os quais são provenientes de uma base de transações sintéticas e enriquecidas. Esses dados incluem atributos como: transacao_id, cliente_id, valor, data, status, nível de suspeita, motivo do alerta, entre outros.

 TECNOLOGIAS UTILIZADAS:
 -
Framework: React.js

Estilização: Material UI

Gerenciamento de Rotas: React Router DOM

Consumo de API: Axios

Controle de Estado: useState, useEffect, Context API (quando necessário)

Hospedagem: Vercel

COMANDO DE INICIALIZAÇÃO:
-
npm install
npm run dev


 CONCLUSÃO:
 -
O frontend do sistema antifraude entrega uma interface moderna, responsiva e eficiente para o acompanhamento de transações bancárias analisadas. A ferramenta permite visualizar alertas, filtrar transações por diferentes critérios, acompanhar o risco por conta e compreender os motivos de suspeita, contribuindo com agilidade e precisão para as decisões da equipe de controle.
_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


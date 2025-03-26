from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
#Adiciona o middleware CORS para permitir requisições entre frontend (React) e backend (FastAPI).
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],#Permite apenas requisições do React, que roda nessa porta.
    allow_credentials=['*'],
    allow_methods=['*'], #permite qualquer metodo http
    allow_headers=['*']
)

@app.get('/transacoes') #define uma rota get

def get_transacoes():
    return[
        {"id": 1, "conta": "12345", "valor": 1000, "tipo": "saque"},
        {"id": 2, "conta": "54321", "valor": 5000, "tipo": "transferência"},
    ]

#Cria uma função que retorna uma lista de dicionários (simulando transações bancárias).

#Essa lista seria normalmente extraída de um banco de dados, mas aqui é apenas um exemplo.
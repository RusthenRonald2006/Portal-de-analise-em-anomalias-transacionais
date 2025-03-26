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
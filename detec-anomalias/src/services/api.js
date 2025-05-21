//Ele recupera o token do localStorage
//E adiciona no cabeçalho da requisição automaticamente
import axios from "axios";
const api = axios.create({
    baseURL: "https://antifraude-api.onrender.com",
})
//Ele recupera o token do localStorage
//E adiciona no cabeçalho da requisição automaticamente
import axios from "axios";
const api = axios.create({
    baseURL: "https://antifraude-api.onrender.com",
})

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("token")
        if (token){
            config.headers.Authorization = `bearer ${token}`
        } return config;
    },
    (error)=>Promise.reject(error)
) 
export default api;

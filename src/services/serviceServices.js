import { api, cancelTokenSource } from "./api";
import authServices from "./authServices"

async function getComidas(){
    try {
        const comidas = await api.get("/service/getComidas")

        return comidas
    } catch (error) {   
        console.log(error)
    }
}

async function getQuartoUser(){
    try {
        const user = (await authServices.getUser()).data

        const quarto = (await api.get("/service/getQuartobyUser", { 
            params: {id: user.id}
        })).data

        if(!quarto){
            throw new Error("Usuário não possui quartos")
        }
        
        return quarto
    } catch (error) {
        console.log(error)
    }
}

async function getPedidosUser(){
    try {
        const quarto = await getQuartoUser()

        const pedidos = (await api.get("/service/getServicosUser", { params: {id: quarto.id}})).data
    
        return pedidos
    } catch (error) {
        console.log(error)
    }
}

async function getComida(id){
    try {
        return await api.get("/service/getComida", {params: {id}})
    } catch (error) {
        console.log(error)
    }
}

async function postServico({id_quarto, tipo, comidas, descricao, horario}){
    try {
        const servico = await api.post("/service", {id_quarto, tipo, comidas, descricao, horario})
        
        return servico
    } catch (error) {
        console.log(error)
    }
}

async function getQuarto(id){
    try {
        const quarto = await api.get("/hotel/quartos/get", {params: {id}})

        return quarto
    } catch (error) {
        console.log(error)
    }
}

const serviceServices = {
    getComidas,
    getQuartoUser,
    getPedidosUser,
    getComida,
    postServico,
    getQuarto
}

export default serviceServices;
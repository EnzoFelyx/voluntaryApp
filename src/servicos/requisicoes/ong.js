import api from "../api";


export async function pegarDadosTodasOngs() {
    try {
        const resultado = await api.get(`/ongs`); 
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
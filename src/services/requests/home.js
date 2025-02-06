import api from "../api";
import { listaUsers } from "./usuario";

export async function pegarTodosEventos() { //att
    try {
        const resultado = await api.get(`/eventos`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarDadosTodasOngs() { //att
    try {
        const resultado = await api.get(`/users`);
        const usuariosOngs = resultado.data.filter(user => user.type === "Ong");
        return usuariosOngs;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarDadosTodosUsuarios() { //att
    try {
        const resultado = await listaUsers();
        const usuariosPessoa = resultado.filter(user => user.type === "person");
        return usuariosPessoa;
    } catch (error) {
        console.log(error);
        return null;
    }
}

/* export async function pegarDadosUsuario({ nome }) { //necessário?
    try {
        const resultado = await listaUsers();
        if (resultado) {
            const usuario = resultado.find(user => user.nome === nome);
            console.log(usuario)
            return usuario;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
} */
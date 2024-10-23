import api from "../api";

export async function pegarTodosEventos() {
    try {
        const resultado = await api.get(`/eventos`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarDadosTodasOngs() {
    try {
        const resultado = await api.get(`/users`);
        const usuariosOngs = resultado.data.filter(user => user.type === "Ong");
        return usuariosOngs;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarDadosTodosUsuarios() {
    try {
        const resultado = await api.get(`/users`);
        const usuariosPessoa = resultado.data.filter(user => user.type === "person");
        return usuariosPessoa;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarDadosUsuario({ nome }) {
    try {
        const resultado = await api.get(`/users?nome=${nome}`)
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
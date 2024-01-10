import api from "../api";

export async function Login(email, senha) {
    if (!email || !senha) return null()

    else {

        try {

            const resultado = await api.get(`/users?email=${email}&&senha=${senha}`)

            if (resultado.data.length > 0) {

                return resultado.data[0];
            }
            else {

                return null;
            }
        }

        catch (error) {
            console.log(error)
            return null
        }
    }
}

export async function pegarDadosUsuario(id) {
    try {
        const resultado = await api.get(`/users/${id}`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function UserEvent(id, idEvento) {
    try {
        const resultado = await api.get(`/amarraParticipanteEvento?postId=${id}&eventoId=${idEvento}`);    
        if (resultado.data.length !== 0) {
            return 'encontrado'
        }
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

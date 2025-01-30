import api from "../api";

export async function Login(email, senha) {
    
    if (!email || !senha) return null()

    else {
        try {
            const resultado = await api.get(`/users?usuario=${email}&&senha=${senha}`)
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
        const myresult = await api.get(`/eventos?id=${idEvento}`);
        if (myresult.data[0].idCriador === id) {
            return 'mine'
        }
        else {
            const resultado = await api.get(`/amarraParticipanteEvento?postId=${id}&eventoId=${idEvento}`);
            if (resultado.data.length !== 0) {
                return 'encontrado'
            }
            else
                return 'new'
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function amarrarSeguidor(id) {

    const [ownerId, otherId] = id;

    try {
        const resultado = await api.get(`/amarrarSeguidor?ownerId=${ownerId}&&otherId=${otherId}`)
        if (!resultado.data[0] && ownerId !== otherId) {
            try {
                await api.post(`/amarrarSeguidor`,
                    {
                        id: Date.now(),
                        ownerId: ownerId,
                        otherId: otherId
                    });
                return console.log('Seguindo')
            }
            catch (error) {
                return console.log('Falha ao seguir')
            }
        }
        else {
            try {
                const deletar = resultado.data[0].id
                await api.delete(`/amarrarSeguidor/${deletar}`);
                return console.log('Você não está mais seguindo este usuário');
            }
            catch (error) {
                console.log(error)
                return console.log('Erro ao tirar seguindo');
            }
        }
    }
    catch (error) {
        console.log(error)
        return console.log('Erro ao buscar usuários')
    }
}

export async function procurarAmigo(id) {

    const [ownerId, otherId] = id;

    try {
        const resultado = await api.get(`/amarrarSeguidor?ownerId=${ownerId}&&otherId=${otherId}`)
        if (!resultado.data[0] && ownerId !== otherId) {
            return true
        }
        else {
            return false
        }
    }
    catch (error) {
        console.log(error)
        return console.log('Erro ao buscar usuários')
    }
}

export async function sugestoes(userId) {
    try {
        const usuarios = await api.get(`/users`);
        const pessoas = usuarios.data.filter(user => user.type === "person");
        const amigos = await api.get(`/amarrarSeguidor`);

        const meusAmigos = amigos.data.filter(item => item.ownerId === userId); //somente meus amigos 
        const sugestao = pessoas.filter(item =>
            !meusAmigos.some(amigo => amigo.otherId === item.id)
        );

        return sugestao
    } catch (error) {
        console.log(error);
        return null;
    }
}
import api from "../api";

export async function pegarEventos(id) { //att 
    try {
        const resultado = await api.get(`/eventos`);
        const evento = resultado.data.filter(event => event.id == id);
        return evento;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarEventosInscritos(id) { //att
    try {

        const resultado = await api.get(`/amarraParticipanteEvento`);
        const evento = resultado.data.filter(event => event.postId == id);
        return evento;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function criarEvento(dados) {

    const [
        Ename,
        formatDate,
        Estart,
        latitude,
        longitude,
        rua,
        cidade,
        descricao,
        participante,
        publico,
        capaImagem,
        id,
        perfil,
        nome,
        fotosEvento
    ] = dados

    const coordenadas = [latitude, longitude]
    const localEvento = `${rua}\n${cidade}`
    const idEvento = Date.now()

    try {
        await api.post(`/eventos`,
            {
                id: idEvento,
                criadorEvento: nome,
                idCriador: id,
                imagemCriadorEvento: perfil,
                nomeEvento: Ename,
                coordendasEvento: coordenadas,
                localEvento: localEvento,
                dataEvento: formatDate,
                horaEvento: Estart,
                descricao: descricao,
                imagemEvento: capaImagem,
                contPessoas: participante,
                fotosEvento: fotosEvento,
                localtype: publico,
            });
        const newResult = await criarAmrEvento(
            id,
            idEvento
        );
        if (newResult == 'Sucesso') {
            console.log('Inscrição feita com sucesso!');
        }
        else {
            console.log('Erro ao se inscrever no evento')
        }
        return 'Sucesso'
    }
    catch (error) {
        console.log(error)
        return 'Erro'
    }

}

export async function buscarEvento(nomeEvento) { //att
    try {
        const resultado = await api.get(`/eventos`);
        const eventos = resultado.data.filter(event =>
            event.nomeEvento.toLowerCase().includes(nomeEvento.toLowerCase())
        );
        return eventos;
    }
    catch (error) {
        console.log(error)
        return {}
    }
}

export async function criarAmrEvento(postId, eventoId) {
    try {
        await api.post(`/amarraParticipanteEvento`,
            {
                postId: postId,
                eventoId: eventoId,

            });
        console.log('Sucesso ao inscrever-se no evento!')
        return 'Sucesso'
    }
    catch (error) {
        console.log(error)
        return console.log('Erro')
    }
}

export async function deletAmrEvento(postId, eventoId) {
    try {
        const resultado = await api.get(`/amarraParticipanteEvento?postId=${postId}&eventoId=${eventoId}`);
        const deletar = resultado.data[0].id
        await api.delete(`/amarraParticipanteEvento/${deletar}`);
        return 'Sucesso'
    }
    catch (error) {
        console.log(error)
        return console.log('Erro');
    }
}

export async function deleteEvento(idUser, eventoId) {
    try {
        const resultado = await api.get(`/eventos?id=${eventoId}`);
        if (resultado.data[0].idCriador === idUser) {
            await api.delete(`/eventos/${eventoId}`);
            return 'Sucesso'
        }
        else
            return console.log('Sem permissão para excluir evento')
    }
    catch (error) {
        console.log(error)
        return console.log('Erro');
    }
}
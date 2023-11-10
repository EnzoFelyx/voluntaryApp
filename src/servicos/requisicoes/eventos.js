import api from "../api";

export async function pegarEventos(id) {
    try {
        const resultado = await api.get(`/eventos?postId=${id}`); 
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarEventosInscritos(id) {
    try {
        const resultado = await api.get(`/eventos//participantes?id=${id}`); 
        return resultado.data.eventos;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function pegarTodosEventos() {
    try {
        const resultado = await api.get(`/eventos`); 
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function salvarEvento(postId,id,rnome,rdata)
{

    try{

        const resultado = await api.put(`/repositories/${id}`,
        {
            postId:postId,
            id:id,
            rnome:rnome,
            rdata:rdata 
        });
        return 'Sucesso'
    }

    catch (error){
        console.log(error)
        return 'Erro'
    }

}

export async function criarEvento(postId,criadorEvento,nomeEvento,localEvento,dataEvento,horaEvento,descricao,imagemEvento)
{

    try{

        await api.post(`/eventos`,
        {
            postId:postId,
            criadorEvento:criadorEvento,
            nomeEvento:nomeEvento,
            localEvento:localEvento,
            dataEvento:dataEvento,
            horaEvento:horaEvento,
            descricao:descricao,
            imagemEvento:imagemEvento
        });
        return 'Sucesso'
    }

    catch (error){
        console.log(error)
        return 'Erro'
    }

}


export async function deletarEvento(id)
{

    try{

        await api.delete(`/repositories/${id}`);
        return 'Sucesso'
    }

    catch (error){
        console.log(error)
        return 'Erro'
    }

}

export async function buscarEvento(nomeEvento){
    try{
        const resultado = await api.get (`/eventos?nomeEvento=${nomeEvento}`)
        return resultado.data;
    }
    catch (error){
        console.log(error)
        return {}
    }
}
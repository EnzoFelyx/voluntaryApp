import api from "../api";

export async function criarConta(perfil, nome, email, cpf, senha) {
    try {

        await api.post(`/users`,
            {
                perfil: perfil,
                nome: nome,
                email: email,
                cpf: cpf,
                senha: senha,
            });
        return 'Sucesso'
    }

    catch (error) {
        return 'Erro'
    }

};



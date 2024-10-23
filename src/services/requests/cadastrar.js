import { validarCNPJ } from "../../utils/validations";
import api from "../api";

export async function criarConta(imagem, usuario, nome, email, identification, senha) {

    if (validarCNPJ(identification)) {
        try {
            await api.post(`/ongs`,
                {
                    id: Date.now(),
                    perfil: imagem,
                    usuario: usuario,
                    nome: nome,
                    email: email,
                    cpf_cnpj: identification,
                    type: "Ong",
                    senha: senha,
                });
            return 'Sucesso'
        }
        catch (error) {
            return 'Erro'
        }

    }
    else {
        try {
            await api.post(`/users`,
                {
                    id: Date.now(),
                    perfil: imagem,
                    usuario: usuario,
                    nome: nome,
                    email: email,
                    cpf_cnpj: identification,
                    type: "person",
                    senha: senha,
                });
            return 'Sucesso'
        }
        catch (error) {
            return 'Erro'
        }
    }
};



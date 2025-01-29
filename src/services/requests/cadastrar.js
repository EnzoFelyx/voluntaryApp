import { Alert } from "react-native";
import { validarCNPJ } from "../../utils/validations";
import api from "../api";

export async function criarConta(imagem, nome, email, identification, senha) {

    const type = validarCNPJ(identification) ? "Ong" : "person";
    const id = Date.now();

    try {
        await api.post(`/users`, {
            id: id,
            perfil: imagem,
            usuario: email,
            nome: nome,
            email: email,
            cpf_cnpj: identification,
            type: type,
            senha: senha,
        });
        return id;
    } catch (error) {
        return false;
    }
}

export async function emailExistente(email) {
    try {
        const resultado = await api.get(`/users?email_like=${email}`);
        if (resultado.data.length === 0) {
            return false
        }
        else {
            return true
        }
    }
    catch (error) {
        return console.log(error)
    }
}
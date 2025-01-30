import { validarCNPJ } from "../../utils/validations";
import api from "../api";
import CryptoJS from "crypto-js";

export async function criarConta(imagem, nome, email, identification, senha) {

    const type = validarCNPJ(identification) ? "Ong" : "person";
    const id = Date.now();

    const hash = CryptoJS.MD5(senha).toString();

    function maskCPF(cpf) {
        if (type === "person") {
            const onlyNumbers = cpf.replace(/\D/g, '');
            return onlyNumbers.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, (_, p1, p2, p3, p4) => {
                const maskedP2 = p2.replace(/\d/g, 'X');
                const maskedP3 = p3.replace(/\d/g, 'X');
                return `${p1}.${maskedP2}.${maskedP3}-${p4}`;
            });
        }
    }

    const newIdentification = maskCPF(identification)

    try {
        await api.post(`/users`, {
            id: id,
            perfil: imagem,
            usuario: email,
            nome: nome,
            email: email,
            cpf_cnpj: newIdentification,
            type: type,
            senha: hash,
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
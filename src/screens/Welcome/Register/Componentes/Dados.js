import React, { useState } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import Input from '../../../../componentes/Input';
import Botao from '../../../../componentes/Botao';
import { criarConta } from "../../../../servicos/requisicoes/cadastrar";
import { useNavigation } from "@react-navigation/native";
import Default from '../../../../../assets/perfil/FotoDefault.png';
import Imagem from '../../../../componentes/Imagem';
import { registrar } from "../../../../../config/text.json";

export default function Dados() {

    const [dados, setDados] = useState({});
    let imagem = null;
    const navigation = useNavigation()

    const { nome, social, email, cpf, senha, confirmar, botao } = registrar.input
    const { error, registrado } = registrar.alertas


    function atualizarDados(id, valor) {
        setDados({ ...dados, [id]: valor })

    }

    async function criar() {
        const resultado = await criarConta(
            dados[imagem],
            dados[nome],
            dados[email],
            dados[cpf],
            dados[senha]
        );

        if (resultado == 'Sucesso') {
            Alert.alert(registrado)
            navigation.goBack()
        }
        else {
            Alert.alert(error)
        }
    };

    return <>
        <TouchableOpacity>
            <Imagem imagem={Default} tipo={"RegistrarFoto"} />
        </TouchableOpacity>
        <View style={{ marginBottom: 16, }}>
            <Input entrada={nome} valor={dados[nome]} onChangeText={(valor) => atualizarDados(nome, valor)} />
            <Input entrada={email} valor={dados[email]} onChangeText={(valor) => atualizarDados(email, valor)} />
            <Input entrada={cpf} valor={dados[cpf]} onChangeText={(valor) => atualizarDados(cpf, valor)} />
            {/* <Input entrada={social} valor={dados[social]} onChangeText={(valor) => atualizarDados(social, valor)} /> 
            quando for cnpj (fazer verificação*/}
            <Input entrada={senha} valor={dados[senha]} senha={true} onChangeText={(valor) => atualizarDados(senha, valor)} />
            <Input entrada={confirmar} valor={dados[confirmar]} senha={true} onChangeText={(valor) => atualizarDados(confirmar, valor)} />
            <Botao texto={botao} tipo={1} acao={criar} />
        </View>
    </>
}





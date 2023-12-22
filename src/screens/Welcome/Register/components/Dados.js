import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Default from '../../../../../assets/perfil/FotoDefault.png';
import { register } from "../../../../../config/text.json";
import Button from '../../../../components/Button';
import Image from '../../../../components/Image';
import Input from '../../../../components/Input';
import { criarConta } from "../../../../services/requests/cadastrar";

export default function Dados() {

    const [dados, setDados] = useState({});
    let imagem = null;
    const navigation = useNavigation()

    const { name, social, email, cpf, password, confirm, button } = register.input
    const { error, registered } = register.warnings


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
            Alert.alert(registered)
            navigation.goBack()
        }
        else {
            Alert.alert(error)
        }
    };

    return <>
        <TouchableOpacity>
            <Image imagem={Default} tipo={"RegistrarFoto"} />
        </TouchableOpacity>
        <View style={{ marginBottom: 16, }}>
            <Input entrada={name} valor={dados[name]} onChangeText={(valor) => atualizarDados(name, valor)} />
            <Input entrada={email} valor={dados[email]} onChangeText={(valor) => atualizarDados(email, valor)} />
            <Input entrada={cpf} valor={dados[cpf]} onChangeText={(valor) => atualizarDados(cpf, valor)} />
            {/* <Input entrada={social} valor={dados[social]} onChangeText={(valor) => atualizarDados(social, valor)} /> 
            quando for cnpj (fazer verificação*/}
            <Input entrada={password} valor={dados[password]} senha={true} onChangeText={(valor) => atualizarDados(password, valor)} />
            <Input entrada={confirm} valor={dados[confirm]} senha={true} onChangeText={(valor) => atualizarDados(confirm, valor)} />
            <Button texto={button} tipo={1} acao={criar} />
        </View>
    </>
}





import React from "react";
import { View } from "react-native";
import Input from '../../../../componentes/Input';

export default function Dados({ nome, email, CPF_CNPJ, senha, confirma}) {
    return <>
    <View style={{marginBottom: 32,}}>
        <Input entrada={nome} />
        <Input entrada={email} />
        <Input entrada={CPF_CNPJ} />
        <Input entrada={senha} senha={true}/>
        <Input entrada={confirma} senha={true}/>
    </View>
    </>
}

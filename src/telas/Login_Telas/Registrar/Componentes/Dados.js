import React from "react";
import { View } from "react-native";
import Input from '../../../../componentes/Input';

export default function Dados({ nome, social, email, CPF_CNPJ, senha, confirma}) {
    return <>
    <View style={{marginBottom: 16,}}>
        <Input entrada={nome} />
        <Input entrada={social} />
        <Input entrada={email} />
        <Input entrada={CPF_CNPJ} />
        <Input entrada={senha} senha={true}/>
        <Input entrada={confirma} senha={true}/>
    </View>
    </>
}

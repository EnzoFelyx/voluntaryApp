import React from "react";
import Input from '../../../../componentes/Input';
import Titulo from '../../../../componentes/Titulo';
import { SafeAreaView } from "react-native";

export default function Conta({ title, nome, senha }) {
    return <SafeAreaView>
        <Titulo entrada={title} tipo={"Titulo"} />
        <Input entrada={nome} />
        <Input entrada={senha} senha={true} />
    </SafeAreaView>
}
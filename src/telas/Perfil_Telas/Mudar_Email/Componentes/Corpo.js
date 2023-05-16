import React from "react";
import { StyleSheet, View } from "react-native";
import Botao from "../../../../componentes/Botao";
import Input from '../../../../componentes/Input';
import Titulo from "../../../../componentes/Titulo";

export default function Corpo({ subtitle, legendaNova, inputEmail, legendaSenha, inputSenha, botao }) {
    return <>
        <View >

            <Titulo entrada={subtitle} tipo={"Titulo"} />

            <Input entrada={inputEmail} legenda={legendaNova} />

            <Input entrada={inputSenha} legenda={legendaSenha} />

            <Botao texto={botao} tipo={1} />

        </View>
    </>
}

import React from "react";
import { StyleSheet, View } from "react-native";
import Input from '../../../../componentes/Input';
import Titulo from "../../../../componentes/Titulo";
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";
import { mudarsenha } from "../../../../../config/text.json";

export default function Corpo() {

    const { subtitle, legendaSenha, legendaAtual, inputSenha, legendaConfirma, botao } = mudarsenha.corpo

    return <>
        <View >

            <Titulo entrada={subtitle} tipo={"Titulo"} />

            <Input legenda={legendaAtual} entrada={inputSenha} />

            <Input legenda={legendaSenha} entrada={inputSenha} />

            <Input legenda={legendaConfirma} entrada={inputSenha} />

            <Botao texto={botao} tipo={1} />

        </View>
    </>
}

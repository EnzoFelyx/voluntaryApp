import React from "react";
import { View } from "react-native";
import { perfil } from "../../../../../config/text.json";
import Botao from "../../../../componentes/Botao";
import Input from '../../../../componentes/Input';
import Titulo from "../../../../componentes/Titulo";

export default function Corpo() {

    const { subtitle, legendaSenha, legendaAtual, inputSenha, legendaConfirma, botao } = perfil.mudarSenha.corpo

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

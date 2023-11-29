import React from "react";
import { View } from "react-native";
import { perfil } from "../../../../../config/text.json";
import Botao from "../../../../componentes/Botao";
import Input from '../../../../componentes/Input';
import Titulo from "../../../../componentes/Titulo";

export default function Corpo() {

    const { subtitle, legendaNova, inputEmail, legendaSenha, inputSenha, botao } = perfil.email.corpo
    return <>
        <View >
            <Titulo entrada={subtitle} tipo={"Titulo"} />
            <Input entrada={inputEmail} legenda={legendaNova} />
            <Input entrada={inputSenha} legenda={legendaSenha} senha={true} />
            <Botao texto={botao} tipo={1} />
        </View>
    </>
}

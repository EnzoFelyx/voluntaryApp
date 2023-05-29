import React from "react";
import { StyleSheet, View } from "react-native";
import Input from '../../../../componentes/Input';
import Titulo from "../../../../componentes/Titulo";
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";

export default function Corpo({ subtitle, legendaSenha, legendaAtual, inputSenha, legendaConfirma, botao }) {
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

import React from "react";
import { StyleSheet, View } from "react-native";
import Input from '../../../../componentes/Input';
import Titulo from "../../../../componentes/Titulo";
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";
import Opcao from "../../../../componentes/Opcao";

export default function Corpo({ subtitle, texto, input, botaoValidar, botaoReenviar }) {
    return <>
        <View style={{}}>
            <Titulo entrada={subtitle} />
            <View style={estilos.texto}>
                <Texto>{texto}</Texto>
            </View>
            <Input entrada={input} />
            <View style={estilos.botao}>
                <Botao texto={botaoValidar} tipo={1} />
                <Opcao texto={"ou"} />
                <Botao texto={botaoReenviar} tipo={2} />
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 32,
    },
    texto: {
        paddingVertical: 16,
    },
})
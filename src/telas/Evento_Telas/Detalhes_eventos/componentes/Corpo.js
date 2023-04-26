import React from "react";
import Titulo from '../../../../componentes/Titulo';
import Texto from "../../../../componentes/texto";
import { StyleSheet, Text, View } from "react-native";

import Botao from "../../../../componentes/Botao";



export default function Corpo({ descricao, texto, participantes, botao }) {
    return <>
        <Titulo entrada={descricao} />
        <Texto>{texto}</Texto>
        <View style={estilos.participantes}>
            <Texto>{participantes}</Texto>
        </View>
        <Botao texto={botao} tipo={2} />
    </>
}


const estilos = StyleSheet.create({
    participantes: {
        marginTop: 16,
        flexDirection: "row",
        marginLeft: "auto",
        marginBottom: 16,
    },

})
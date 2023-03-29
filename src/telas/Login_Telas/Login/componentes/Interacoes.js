import React from "react";
import { StyleSheet, View } from "react-native";

import Botao from '../../../../componentes/Botao';
import Texto from '../../../../componentes/texto';

export default function Interacoes({ esqueceu, botaoEntrar, ou, convidado, pergunta, registrar }) {
    return <>
        <Texto style={estilos.esqueceu} >{esqueceu}</Texto>

        <Botao texto={botaoEntrar} tipo={1}/>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
                <Texto style={estilos.ou} >{ou}</Texto>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <Botao texto={convidado} tipo={2}/>

        <View style={estilos.registra}>
            <Texto style={estilos.pergunta} >{pergunta}</Texto>
            <Texto style={estilos.registrar} >{registrar}</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    esqueceu: {
        marginTop: 8,
        marginBottom: 16,
        fontSize: 14,
        lineHeight: 26,
        textAlign: "right",
        color: "#1ea3b5",
    },
    ou: {
        fontSize: 16,
        lineHeight: 26,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginBottom: 5,

    },

    registra: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    pergunta: {
        fontSize: 14,
        lineHeight: 26,
    },

    registrar: {
        fontSize: 14,
        lineHeight: 26,
        marginLeft: 8,
        color: "#1ea3b5",
    },
})
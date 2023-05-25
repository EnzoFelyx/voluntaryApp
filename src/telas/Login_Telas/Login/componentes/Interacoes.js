import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import Botao from '../../../../componentes/Botao';
import Linha from "../../../../componentes/Linha";
import Texto from '../../../../componentes/texto';

export default function Interacoes({ esqueceu, botaoEntrar, ou, convidado, pergunta, registrar }) {
    return <SafeAreaView>
        <TouchableOpacity>
            <Texto style={estilos.esqueceu} >{esqueceu}</Texto>
        </TouchableOpacity>
        <Botao texto={botaoEntrar} tipo={1} />
        <Linha texto={ou} />
        <Botao texto={convidado} tipo={2} />
        <View style={estilos.registra}>
            <Texto style={estilos.pergunta} >{pergunta}</Texto>
            <TouchableOpacity>
                <Texto style={estilos.registrar} >{registrar}</Texto>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
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
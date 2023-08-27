import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Botao from '../../../../componentes/Botao';
import Linha from "../../../../componentes/Linha";
import Texto from '../../../../componentes/texto';

export default function Interacoes({ esqueceu, botaoEntrar, ou, convidado, pergunta, registrar }) {
    const navigation = useNavigation();

    return (
        <SafeAreaView>

            {/* <TouchableOpacity onPress={() => { navigation.navigate('Mudar Senha') }}>
                <Text style={estilos.esqueceu}>{esqueceu}</Text>
            </TouchableOpacity> */}

            <Botao texto={botaoEntrar} tipo={1} acao={() => { navigation.navigate('Logado') }} />

            <Linha texto={ou} />

            <Botao texto={convidado} tipo={2} />

            <View style={estilos.registra}>

                <Texto style={estilos.pergunta} >{pergunta}</Texto>

                <TouchableOpacity onPress={() => { navigation.navigate('Registrar') }}>
                    <Texto style={estilos.registrar} >{registrar}</Texto>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    esqueceu: {

        marginVertical: 8,
        marginBottom: 32,
        fontSize: 14,
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
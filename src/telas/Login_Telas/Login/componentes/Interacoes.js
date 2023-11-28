import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { login } from "../../../../../config/text.json";
import Botao from '../../../../componentes/Botao';
import Linha from "../../../../componentes/Linha";
import Texto from '../../../../componentes/texto';

export default function Interacoes() {

    const navigation = useNavigation();
    const { convidado, ou, pergunta, registrar } = login.interacoes;

    function handleResultadoLogin(resultado) {
        setResultadoLogin(resultado);
    }

    return (
        <>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('Mudar Senha') }}>
                <Text style={estilos.esqueceu}>{esqueceu}</Text>
            </TouchableOpacity>
            <Botao texto={botaoEntrar} tipo={1} acao={() => { navigation.navigate('Logado') }} /> */}

            <Linha texto={ou} />
            <Botao texto={convidado} tipo={2} />
            <View style={estilos.registra}>
                <Texto style={estilos.pergunta} >{pergunta}</Texto>
                <TouchableOpacity onPress={() => { navigation.navigate('Registrar') }}>
                    <Texto style={estilos.registrar} >{registrar}</Texto>
                </TouchableOpacity>
            </View>
        </>
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
        marginTop: 20,
        alignItems: "center"
    },

    pergunta: {
        fontSize: 14,
        lineHeight: 26,
    },

    registrar: {
        fontSize: 14,
        lineHeight: 26,
        color: "#1ea3b5",
    },
})
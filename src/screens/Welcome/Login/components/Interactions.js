import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { login } from "../../../../../config/text.json";
import Button from '../../../../components/Button';
import Line from "../../../../components/Line";
import Texto from '../../../../components/texto';

export default function Interacoes() {

    const navigation = useNavigation();
    const { guest, or, ask, register } = login.interactions;

    function handleResultadoLogin(resultado) {
        setResultadoLogin(resultado);
    }

    return (
        <>
            <Line texto={or} />
            <Button texto={guest} tipo={2} />
            <View style={estilos.registra}>
                <Texto style={estilos.pergunta} >{ask}</Texto>
                <TouchableOpacity onPress={() => { navigation.navigate('Registrar') }}>
                    <Texto style={estilos.registrar} >{register}</Texto>
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
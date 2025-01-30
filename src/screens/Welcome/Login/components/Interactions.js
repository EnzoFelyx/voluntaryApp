import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { login } from "../../../../../config/text.json";
import Button from '../../../../components/Button';
import Line from "../../../../components/Line";
import Texto from '../../../../components/texto';
import { Login } from "../../../../services/requests/usuario";

export default function Interactions() {

    const navigation = useNavigation();

    const { guest, or, ask, register } = login.interactions;

    const [email, setEmail] = useState("ef");
    const [password, setSenha] = useState("123");


    async function logar() {

        if (email && password) { // Verifica se ambos estão preenchidos
            const resultado = await Login(email, password);
            if (resultado) {
                await AsyncStorage.setItem("id", String(resultado.id))
                navigation.replace("Logado");
            } else {
                Alert.alert(error);
            }
        }
    }


    return (
        <>
            <Line texto={or} />
            <Button texto={guest} tipo={2} acao={logar} />
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
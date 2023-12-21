import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Image from "../../../components/Image";
import Texto from "../../../components/texto";

export default function Overview({ perfil, nome }) {
    return <>
        <TouchableOpacity style={estilos.contorno}>
            <Image imagem={{ uri: perfil }} tipo={"Perfil"} />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
            <Texto style={estilos.nome}>{nome}</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({

    contorno: {
        height: 166,
        width: 166,
        borderRadius: 90,
        alignSelf: 'center',
        backgroundColor: "#FFFFFFFF",
        marginTop: 16,
        marginBottom: 16,
    },

    nome: {
        fontSize: 22,
        fontWeight: "bold",
    },
})

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import exemploFoto from "../../../../../assets/exemplos/PerfilFoto.png";
import Imagem from "../../../../componentes/Imagem";

export default function VisaoGeral({}) {
    return <>
        <View style={estilos.contorno}>
        <Imagem imagem={exemploFoto} tipo={"Perfil"} />
        </View>
        <View style={{alignItems: "center"}}>
            <Text style={estilos.nome}>{"José Lins da Silva Junior"} </Text>
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

import React from "react";
import Titulo from './Titulo';
import Imagem from './Imagem';
import { StyleSheet, View } from "react-native";


export default function Cabecalho({ titulo, PerfilFoto }) {
    return <>
        <View style={estilos.topo}>
            <Titulo entrada={titulo} />
            <Imagem imagem={PerfilFoto} tipo={'perfilFoto'}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        marginLeft: 26,
        marginTop: 48,

    },
})

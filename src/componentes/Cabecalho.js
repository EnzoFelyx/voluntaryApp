import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Imagem from './Imagem';
import Titulo from './Titulo';


export default function Cabecalho({ titulo, PerfilFoto }) {
    return <>
        <View style={estilos.topo}>
            <Titulo entrada={titulo} />
            <TouchableOpacity style={{ flex: 1 }}>
                <Imagem imagem={PerfilFoto} tipo={'perfilFoto'} />
            </TouchableOpacity>
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

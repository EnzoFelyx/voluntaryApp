import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Voltar from "../../../../componentes/Voltar";

export default function Topo({ titulo }) {
    return <>
        <Voltar/>   
        <View style={estilos.title}>
        <Titulo entrada={titulo} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    title: {
        marginLeft: 64,
        marginTop: 54,
        marginBottom: 16,
    },

})
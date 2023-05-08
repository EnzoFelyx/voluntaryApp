import React from "react";
import Titulo from '../../../../componentes/Titulo';
import { StyleSheet, View } from "react-native";
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import Voltar from "../../../../componentes/Voltar";

export default function Topo({ title }) {
    return <>
        <Voltar/>   
        <View style={estilos.titulo}>
        <Titulo entrada={title} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        marginLeft: 64,
        marginTop: 54,
        marginBottom: 16,
    },

})
import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Topo({ titulo }) {
    return <>
        <View style={estilos.titulo}>
            <Titulo entrada={"Sua conta"} />
            <View style={estilos.vazar}>
            <SimpleLineIcons name="logout" size={32} color="black"/>
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        flexDirection: "row",
        marginLeft: 40,
        marginTop: 54,
        marginBottom: 8,
    },
    vazar: {
        marginLeft: "auto",
        marginTop: 8,
        marginRight: 40,
    },
})

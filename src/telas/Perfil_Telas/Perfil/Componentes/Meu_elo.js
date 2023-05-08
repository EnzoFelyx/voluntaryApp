import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import { SimpleLineIcons } from '@expo/vector-icons';
import Botao from '../../../../componentes/Botao';

export default function Meu_elo ({}) {
    return <>
    <View style ={estilos.caixa}>

    </View>
    
    </>
}

const estilos = StyleSheet.create({
    caixa: {
        flexDirection: "row",
        height: 150,
        width: 330,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: "#E5ECB9",
        marginTop: 24,
        marginBottom: 16,
    },
})

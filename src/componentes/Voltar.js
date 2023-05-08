import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";


export default function Voltar() {
    return <TouchableOpacity style={estilos.voltar}>
        <MaterialCommunityIcons name="chevron-left" size={40} color="black" />
    </TouchableOpacity>
}


const estilos = StyleSheet.create({
    voltar: {
        position: "absolute",
        marginTop: 56,
        marginLeft: 16,
    },

})
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function Voltar() {

    const navigation =useNavigation();

    return (
    <TouchableOpacity 
    style={estilos.voltar}
    onPress= {() => {navigation.goBack()}} 
    >
        <MaterialCommunityIcons name="chevron-left" size={40} color="gray" />
    </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    voltar: {
        position: "absolute",
        marginTop: 20,
        marginLeft: 16
    },

})
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Praia from "../../../../../assets/exemplos/Praia.png";
import Imagem from '../../../../componentes/Imagem';
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Topo() {
    return <>
        <View>
            <Imagem imagem={Praia} tipo={"fotoEvento"} />
            <TouchableOpacity>
                <MaterialCommunityIcons name="chevron-left" size={40} color="black"/>
            </TouchableOpacity>

        </View>
    </>
}


const estilos = StyleSheet.create({
    voltar: {
        position: "absolute",
        marginTop: 12,
        marginLeft: 12,
    },

})
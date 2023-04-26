import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';

import Texto from "../../../../componentes/texto";

export default function Interativos({ requisto, equipamentos, mapa, avisos }) {
    return <>

        <View style={estilos.icones}>

            <TouchableOpacity style={estilos.espaco}>
                <Feather name="check-circle" size={34} color="black" style={{ marginRight: 8, }} />
                <Texto>{requisto}</Texto>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.espaco}>
                <Entypo name="tools" size={34} color="black" />
                <Texto>{equipamentos}</Texto>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.espaco}>
                <Entypo name="map" size={34} color="black" />
                <Texto>{mapa}</Texto>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.espaco}>
                <AntDesign name="warning" size={34} color="black" />
                <Texto>{avisos}</Texto>
            </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16,}}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        </View>
    </>
}


const estilos = StyleSheet.create({

    icones: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 24,
    },

    espaco: {
        flex: 1,
        alignItems: "center",
        marginBottom: 12,
    },

    touch: {

    },
})
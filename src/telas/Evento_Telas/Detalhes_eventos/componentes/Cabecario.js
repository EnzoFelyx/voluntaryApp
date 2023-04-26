import React from "react";
import Titulo from '../../../../componentes/Titulo';
import Texto from "../../../../componentes/texto";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, EvilIcons } from '@expo/vector-icons';

import organizadoraFoto from "../../../../../assets/organizadoraFoto.png";
import Imagem from "../../../../componentes/Imagem";

export default function Topo({ evento, title, local, data, organizadora }) {
    return <>
        <Text style={estilos.evento}>{evento}</Text>
        <View style={estilos.titulo}>
            <Titulo entrada={title} />
        </View>

        <View style={estilos.local}>
            <EvilIcons name="location" size={30} color="black" />
            <Texto style={{marginLeft: 8}}>{local}</Texto>
        </View>

        <View style={estilos.data}>
            <AntDesign name="calendar" size={24} color="black" />
            <Texto style={{marginLeft: 12}}>{data}</Texto>
        </View>

        <View style={estilos.organizadora}>
            <Texto>{organizadora}</Texto>
            <Imagem imagem={organizadoraFoto} tipo={"fotoMenor"} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    evento: {
        color: "#ffffe5",
        fontSize: 26,
    },

    titulo: {
        marginLeft: 8,
        marginTop: 10,
        marginBottom: 8,
    },

    organizadora: {
        flexDirection: "row",
        marginLeft: "auto",
    },
    local: {
        marginLeft: 8,
        marginBottom: 8,
        flexDirection: "row",
    },

    data: {
        marginLeft: 12,
        marginBottom: 5,
        flexDirection: "row",
    },

})

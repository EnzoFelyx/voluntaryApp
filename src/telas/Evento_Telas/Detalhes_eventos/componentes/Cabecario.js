import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';

import Icone from "../../../../componentes/Icone";
import Organizadora from "../../../../componentes/Organizadora";

export default function Topo({ nome, local, data, organizadora,organizadoraFoto}) {
    return <>
        <Text style={estilos.evento}>{"Evento"}</Text>
        
        <View style={estilos.titulo}>

            <Titulo entrada={nome} tipo={"Titulo"}/>

        </View>

        <Icone tipo={"cabecario"} icone={"google-maps"} texto={local} interativo={false} />

        <Icone tipo={"cabecario"} icone={"calendar-month-outline"} texto={data} interativo={false} />

        <Organizadora image={{uri:organizadoraFoto}} nome={organizadora} />
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
})

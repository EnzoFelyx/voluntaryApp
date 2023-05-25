import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';

import organizadoraFoto from "../../../../../assets/exemplos/organizadoraFoto.png";
import Icone from "../../../../componentes/Icone";
import Organizadora from "../../../../componentes/Organizadora";

export default function Topo({ evento, title, local, data, organizadora }) {
    return <>
        <Text style={estilos.evento}>{evento}</Text>
        
        <View style={estilos.titulo}>

            <Titulo entrada={title} tipo={"Titulo"}/>

        </View>

        <Icone tipo={"cabecario"} icone={"google-maps"} texto={local} interativo={false} />

        <Icone tipo={"cabecario"} icone={"calendar-month-outline"} texto={data} interativo={false} />

        <Organizadora image={organizadoraFoto} nome={organizadora} />
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

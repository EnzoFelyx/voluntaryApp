import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../../../../components/Icon";
import Owner from "../../../../components/Owner";
import Title from '../../../../components/Title';
import Texto from "../../../../components/texto";

export default function Overview({
    nome,
    local,
    data,
    organizadora,
    organizadoraFoto,
    hora
}) {

    return <>
        <View style={estilos.titulo}>
            <Title entrada={nome} tipo={"Titulo"} />
        </View>
        <View style={{ flexDirection: "row" }}>
            <Icon tipo={"cabecario"} icone={"google-maps"} texto={local} interativo={false} tamanho={20} />
            <Texto>{local}</Texto>
        </View>
        <View style={{ flexDirection: "row" }}>
            <Icon tipo={"cabecario"} icone={"calendar-month-outline"} texto={data} interativo={false} tamanho={20} />
            <Texto>{data}</Texto>
            <Texto style={{ marginLeft: 10 }}>{hora}</Texto>
        </View>
        <Owner image={{ uri: organizadoraFoto }} nome={organizadora} />
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

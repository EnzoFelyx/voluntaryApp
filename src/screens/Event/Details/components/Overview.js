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

    const About = ({ icone, familia, texto }) =>
        <View style={estilos.about}>
            <Icon familia={familia} styleIcon={{ fontSize: 25 }} icone={icone} interativo={false} cor={"gray"} />
            <Texto style={estilos.texto}>{texto}</Texto>
        </View>

    return <>
        <View style={estilos.titulo}>
            <Title entrada={nome} tipo={"Titulo"} />
        </View>
        <About familia={"Entypo"} icone={"location-pin"} texto={local} />
        <About icone={"calendar-month-outline"} texto={data} />
        <About icone={"clock-outline"} texto={hora} />
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
    about: {
        flexDirection: "row",
        marginVertical: 3,
    },
    texto: {
        marginLeft: 8,
        color: "gray"
    }
})

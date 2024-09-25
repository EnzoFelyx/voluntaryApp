import React from "react";
import { View } from "react-native";

import pessoas from "../../../../../assets/buscar/pessoas.png";
import Icon from "../../../../components/Icon";
import Image from '../../../../components/Image';
import Owner from "../../../../components/Owner";
import Texto from "../../../../components/texto";
import Title from '../../../../components/Title';
import { estilos } from "./estilos";

export default function Overview({
    nome,
    local,
    data,
    organizadora,
    organizadoraFoto,
    hora,
    people
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
        <View style={estilos.inLine}>
            <About icone={"calendar-month-outline"} texto={data} />
            <About icone={"clock-outline"} texto={hora} />
        </View>

        <View style={estilos.inLine}>
            <About familia={"Entypo"} icone={"location-pin"} texto={local} />
            <View style={{ flexDirection: "row", gap: 12 }}>
                <Image imagem={pessoas} tipo={"icone"} />
                <Texto>{people}</Texto>
            </View>
        </View>
        <Owner image={{ uri: organizadoraFoto }} nome={organizadora} />
    </>
}
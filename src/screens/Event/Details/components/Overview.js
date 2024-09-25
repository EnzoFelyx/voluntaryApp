import React from "react";
import { View } from "react-native";
import { CalendarDays, Clock, MapPin, UsersRound } from "lucide-react-native";

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

    const About = ({ Icon, texto }) =>
        <View style={estilos.about}>
            <Icon color={"gray"} size={22} />
            <Texto style={estilos.texto}>{texto}</Texto>
        </View>

    return <>
        <View style={estilos.titulo}>
            <Title entrada={nome} tipo={"Titulo"} />
        </View>
        <View style={estilos.inLine}>
            <About Icon={CalendarDays} texto={data} />
            <About Icon={Clock} texto={hora} />
        </View>

        <View style={estilos.inLine}>
            <About Icon={MapPin} texto={local} />
            <View style={estilos.peoples}>
                <UsersRound color={"gray"} size={20} />
                <Texto style={{color: "gray"}}>{people}</Texto>
            </View>
        </View>
        <Owner image={{ uri: organizadoraFoto }} nome={organizadora} />
    </>
}
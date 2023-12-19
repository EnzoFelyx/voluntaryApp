import React from "react";
import { View } from "react-native";
import { home } from "../../../../../config/text.json";
import Line from "../../../../components/Line";
import Title from "../../../../components/Title";
import Texto from "../../../../components/texto";
import { UseOngs, useEventos, useUsuarios } from "../../../../hooks/useHome";
import estilos from "./estilos";

export default function List({
    highlights: Highlights,
    trends: Trends,
    ongs: Ongs
}) {

    const { subtitulo, novidades, eventos, destaques, ongs } = home.corpo
    const dadosEventos = useEventos();
    const dadosDoUsuario = useUsuarios();
    const dadosOng = UseOngs();

    return (
        <View style={{ flex: 1 }}>
            <Title entrada={subtitulo} tipo={"subtitle"} />
            <Texto style={estilos.subtitulo}>{novidades}</Texto>
            <Line />
            <Trends dadosEventos={dadosEventos} titulo={eventos} />
            <Highlights dadosDoUsuario={dadosDoUsuario} titulo={destaques} />
            <Ongs dadosOng={dadosOng} titulo={ongs} />
        </View>
    );
}



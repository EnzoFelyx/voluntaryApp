import React from "react";
import { View } from "react-native";

import { home } from "../../../../config/text.json";
import { UseOngs, useEventos, useUsuarios } from "../../../hooks/useHome";

export default function List({
    highlights: Highlights,
    trends: Trends,
    ongs: Ongs
}) {

    const { events, highlights, ongs } = home.body
    const dadosEventos = useEventos();
    const dadosDoUsuario = useUsuarios();
    const dadosOng = UseOngs();

    return (
        <View style={{ flex: 1 }}>
            <Trends dadosEventos={dadosEventos} titulo={events} />
            <Highlights dadosDoUsuario={dadosDoUsuario} titulo={highlights} />
            <Ongs dadosOng={dadosOng} titulo={ongs} />
        </View>
    );
}



import React from "react";
import { View } from "react-native";
import { home } from "../../../../../config/text.json";
import Linha from "../../../../componentes/Linha";
import Titulo from "../../../../componentes/Titulo";
import Texto from "../../../../componentes/texto";
import { UseOngs, useEventos, useUsuarios } from "../../../../hooks/useHome";
import estilos from "./estilos";

export default function Lista({ destaque: Destaques, eventos: Eventos, ongs: Ongs }) {

    const { subtitulo, novidades, eventos, destaques, ongs } = home.corpo
    const dadosEventos = useEventos();
    const dadosDoUsuario = useUsuarios();
    const dadosOng = UseOngs();

    return (
        <View style={{ flex: 1 }}>
            <Titulo entrada={subtitulo} tipo={"subtitle"} />
            <Texto style={estilos.subtitulo}>{novidades}</Texto>
            <Linha />
            <Eventos dadosEventos={dadosEventos} titulo={eventos} />
            <Destaques dadosDoUsuario={dadosDoUsuario} titulo={destaques} />
            <Ongs dadosOng={dadosOng} titulo={ongs} />
        </View>
    );
}



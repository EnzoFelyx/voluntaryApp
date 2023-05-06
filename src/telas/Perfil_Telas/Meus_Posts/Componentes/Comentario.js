import React from "react";
import { StyleSheet, View } from "react-native";
import Comentar from "../../../../componentes/Comentar";
import PerfilFoto from '../../../../../assets/exemplos/PerfilFoto.png';
import Organizadora from "../../../../componentes/Organizadora";
import maos from "../../../../../assets/exemplos/perfilMaosUnidas.png";
import Linha from "../../../../componentes/Linha";

export default function Comentario({ nome, tempo, comentario, organizadora }) {
    return <>
        <View>
            <Comentar UsuarioFoto={PerfilFoto} nome={nome} data={tempo} comentario={comentario} />
            <Organizadora image={maos} nome={organizadora} />
            <Linha />
        </View>

    </>
}

const estilos = StyleSheet.create({

})
import React from "react";
import { SafeAreaView, View } from "react-native";
import PerfilFoto from '../../../../../assets/exemplos/PerfilFoto.png';
import maos from "../../../../../assets/exemplos/perfilMaosUnidas.png";
import Comentar from "../../../../componentes/Comentar";
import Linha from "../../../../componentes/Linha";
import Organizadora from "../../../../componentes/Organizadora";

export default function Comentario({ nome, tempo, comentario, organizadora }) {
    return <SafeAreaView>
        
        <View style={{ marginBottom: 16 }}>
            <Comentar UsuarioFoto={PerfilFoto} nome={nome} data={tempo} comentario={comentario} />
            <Organizadora image={maos} nome={organizadora} />
            <Linha />
        </View>
 
    </SafeAreaView>

}
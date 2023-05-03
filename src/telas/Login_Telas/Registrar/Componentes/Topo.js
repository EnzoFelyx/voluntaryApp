import React from "react";
import { View } from "react-native";
import fotoRegistrar from '../../../../../assets/loginTelas/registra.png';
import Imagem from '../../../../componentes/Imagem';
import Voltar from "../../../../componentes/Voltar";

export default function Topo({ title }) {
    return <>
        <View style={{ alignItems: 'center', marginTop: 32, }}>
            <Imagem imagem={fotoRegistrar} tipo={"loginImagem"} />
        </View>
        <Voltar/>
    </>
}

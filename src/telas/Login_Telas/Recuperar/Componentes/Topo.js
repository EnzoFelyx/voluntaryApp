import React from "react";
import Imagem from '../../../../componentes/Imagem';
import fotoRecuperar from '../../../../../assets/loginTelas/recuperar.png';
import { View } from "react-native";
import Voltar from "../../../../componentes/Voltar";

export default function Pedido() {
    return <>
        <View style={{ alignItems: 'center' , marginTop: 32,}}>
            <Imagem imagem={fotoRecuperar} tipo={"recuperarImagem"} />
        </View>
        <Voltar/>
    </>
}

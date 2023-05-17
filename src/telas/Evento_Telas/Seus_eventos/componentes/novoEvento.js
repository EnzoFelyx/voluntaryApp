import React from "react";
import { View, StyleSheet } from "react-native";
import Botao from '../../../../componentes/Botao';
import Texto from "../../../../componentes/texto";

export default function NovoEvento({botaum}){
    return <View style={estilos.posicao}>
    <Botao tipo={2} texto={botaum}
        acao={() => { }} />
        </View>
};

const estilos = StyleSheet.create({
    posicao: {
        top:10,
        alignSelf: 'center',
        height:55,
        width: 188,
      },

})



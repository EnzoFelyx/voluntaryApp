import React from "react";
import { View, StyleSheet } from "react-native";
import Botao from '../../../../componentes/Botao';
import Texto from "../../../../componentes/texto";

export default function CriarEvento(){
    return <View style={estilos.posicao}>
    <Botao tipo={2} texto={'Criar Evento'}
        acao={() => { }} />
        </View>
};

const estilos = StyleSheet.create({
    posicao: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        height:55,
        width: 188,
      },

})



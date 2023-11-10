import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";



export default function Corpo({ descricao, participantes }) {
    return <>

        <Titulo entrada={'Descrição'} tipo={"Titulo"}/>

        <View style={{ marginTop: 12, }}>
            <Texto>{descricao}</Texto>
        </View>
        
        <View style={estilos.participantes}>
            <Texto>{'Participantes:'}</Texto>
            <Texto>{participantes}</Texto>

        </View>

        <Botao texto={'Inscrever-se'} tipo={2} />
    </>
}


const estilos = StyleSheet.create({

    participantes: {
        marginTop: 16,
        flexDirection: "row",
        marginLeft: "auto",
        marginBottom: 16,
    },

})
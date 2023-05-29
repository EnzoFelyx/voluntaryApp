import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Caixa from '../../../../componentes/Caixa';
import Icone from "../../../../componentes/Icone";

export default function Busca({ search }) {

    return <View style={Caixa.caixa}>
        
        <TextInput style={estilos.caixaInput} placeholder={search} />
        <Icone icone={"magnify"} tamanho={24} tipo={"pesquisa"}/>


    </View>
}

const estilos = StyleSheet.create({
    caixa: {
        fontSize: 18,
        flexDirection: "row",
        
    },

})


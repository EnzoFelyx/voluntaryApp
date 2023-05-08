import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import lupa from '../../../../../assets/exemplos/lupa.png';
import filtro from '../../../../../assets/exemplos/filter.png';
import Imagem from '../../../../componentes/Imagem';
import Caixa from '../../../../componentes/Caixa';

export default function Busca({ search }) {

    return <View style={Caixa.caixa}>
        <TextInput style={estilos.caixaInput} placeholder={search} />
        <View style={{
            flexDirection: "row",
        }}>
            <Imagem imagem={lupa} tipo={'icone'} />
            <Imagem imagem={filtro} tipo={'icone'} />
        </View>

    </View>
}

const estilos = StyleSheet.create({
    caixaInput: {
        fontSize: 18,
        width: "80%",
    },

})


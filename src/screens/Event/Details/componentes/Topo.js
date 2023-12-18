import { StyleSheet, View, TouchableOpacity } from "react-native";
import Praia from "../../../../../assets/exemplos/Praia.png";
import Imagem from '../../../../componentes/Imagem';
import React from "react";
import Voltar from "../../../../componentes/Voltar";


export default function Topo({imagem}) {
    return <>
        <View>
            <Imagem imagem={{uri:imagem}} tipo={"fotoEvento"} />
            <Voltar/>
        </View>
    </>
}
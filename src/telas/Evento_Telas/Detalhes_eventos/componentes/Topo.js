import { StyleSheet, View, TouchableOpacity } from "react-native";
import Praia from "../../../../../assets/exemplos/Praia.png";
import Imagem from '../../../../componentes/Imagem';
import React from "react";
import Voltar from "../../../../componentes/Voltar";


export default function Topo() {
    return <>
        <View>
            <Imagem imagem={Praia} tipo={"fotoEvento"} />
            <Voltar/>
        </View>
    </>
}
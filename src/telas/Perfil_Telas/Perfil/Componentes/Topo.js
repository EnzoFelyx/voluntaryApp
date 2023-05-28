import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Icone from "../../../../componentes/Icone";
import { useNavigation } from "@react-navigation/native";

export default function Topo({ titulo }) {

    const navigation = useNavigation();

    return <>
        <View style={estilos.titulo}>
            <Titulo entrada={titulo} tipo={'Titulo'} />
            <Icone icone={"logout"} tipo={"perfil"} tamanho={32} acao={()=>{navigation.navigate('Login')}} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        flexDirection: "row",
        marginLeft: 40,
        marginTop: 54,
    },
})

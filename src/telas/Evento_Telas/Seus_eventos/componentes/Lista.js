import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Texto from "../../../../componentes/texto";
import MyImageList from './Dados';
import NovoEvento from "./novoEvento";
import Linha from "../../../../componentes/Linha";


export default function Lista({mensagem, botao}) {
    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 12 }}>{/*Margem apenas para adequar ao figma*/}
            <Texto>{mensagem}</Texto>
        </View>


        <View style={{ marginTop: 40, marginBottom: 24, }}>
            <Text style={{fontWeight: "bold", fontSize:18}}> Nº de eventos inscritos: 2 </Text>
        </View>

        <Linha/>

        {/*View da Flatlist*/}
        <View style={{ flex: 1, }}>
            <View>
                <MyImageList />
            </View>
        </View>

        <View style={{ marginTop: 40 }}>
                <NovoEvento {...botao}/>
        </View>

    </SafeAreaView>
}


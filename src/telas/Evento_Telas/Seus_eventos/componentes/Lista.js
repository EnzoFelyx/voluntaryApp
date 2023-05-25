import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Linha from "../../../../componentes/Linha";
import Texto from "../../../../componentes/texto";
import Eventos from './Dados';
import NovoEvento from "./novoEvento";


export default function Lista({ mensagem, botao, contador }) {
    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 12 }}>{/*Margem apenas para adequar ao figma*/}
            <Texto>{mensagem}</Texto>
        </View>


        <View style={{ marginTop: 40, marginBottom: 24, }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{contador}</Text>
        </View>

        <Linha />

        {/*View da Flatlist*/}
        <View style={{ flex: 1 }}>
            <View>
                <Eventos />
            </View>
        </View>

    </SafeAreaView>
}


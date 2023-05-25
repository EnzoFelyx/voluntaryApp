import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Bronze from "../../../../../assets/bronze.png";
import Loading from "../../../../../assets/loading.png";
import Imagem from "../../../../componentes/Imagem";

export default function Meu_elo({ }) {
    return <>
        <View style={estilos.caixa}>

            <Imagem imagem={Bronze} tipo={"Elos"} />

            <View style={estilos.legenda}>
                <TouchableOpacity style={{ flexDirection: "row", marginLeft: 4,}}>
                    <Text style={estilos.texto}>Bronze</Text>
                    <MaterialCommunityIcons name={"information-outline"} size={16} color="black" style={{ marginLeft: 8, marginTop: 3}} />
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>16/20</Text>
                <Imagem imagem={Loading} tipo={"Loading"} />
                
            </View>

        </View>

    </>
}

const estilos = StyleSheet.create({
    caixa: {
        flexDirection: "row",
        height: 150,
        width: 330,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: "#E5ECB9",
        marginTop: 24,
        marginBottom: 48,
        elevation: 8,
    },

    legenda: {
        alignItems: 'center',
        marginTop: 32,
    },

    texto: {
        color: "#CD7F32",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },

})

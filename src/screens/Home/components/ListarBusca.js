import { useNavigation } from "@react-navigation/native";
import { UsersRound } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import Texto from "../../../components/texto";
import estilos from "./estilos";

export default function ListarBusca({
    nomeEvento,
    localEvento,
    contPessoas,
    feedBack
}) {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={estilos.evento}
                onPress={() => navigation.navigate('Detalhes', { item: feedBack })}
            >
                <View style={estilos.busca}>
                    <Texto style={estilos.nome}>{nomeEvento}</Texto>
                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>
                <Texto style={estilos.local}>{localEvento}</Texto>
                <View style={estilos.people}>
                    <UsersRound color={"gray"} size={20} />
                    <Texto style={estilos.contador}>{contPessoas}</Texto>
                </View>
            </View>
        </View>
    );
}

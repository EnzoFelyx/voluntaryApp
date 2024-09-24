import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import pessoas from "../../../../assets/buscar/pessoas.png";
import Image from "../../../components/Image";
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
                    <Image imagem={pessoas} tipo={"icone"} />
                    <Texto style={estilos.contador}>{contPessoas}</Texto>
                </View>
            </View>
        </View>
    );
}

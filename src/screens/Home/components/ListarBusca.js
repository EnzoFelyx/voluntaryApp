import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import pessoas from "../../../../assets/buscar/pessoas.png";
import Button from '../../../components/Button';
import Image from "../../../components/Image";
import Texto from "../../../components/texto";

export default function ListarBusca({
    nomeEvento,
    localEvento,
    contPessoas,
    feedBack
}) {

    const navigation = useNavigation();

    return (
        <View>
            <Button
                tipo={3}
                texto={
                    <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                        <Texto style={estilos.nome}>{nomeEvento}</Texto>
                    </View>
                }
                acao={() => navigation.navigate('Detalhes', { ...feedBack })}
            />
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

const estilos = StyleSheet.create({

    people: {
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: 20,
    },

    nome: {
        fontWeight: "bold",
        fontSize: 16,
    },

    data: {
        marginLeft: "auto",
        marginRight: 8,
        fontSize: 14,
        textAlign: 'right',
    },

    local: {
        textAlign: 'right',
        marginHorizontal: 8,
    },
});

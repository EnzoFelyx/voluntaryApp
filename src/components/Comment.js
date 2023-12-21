import React from "react";
import Titulo from './Title';
import Image from './Image';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Texto from "./texto";

export default function Comentar({ UsuarioFoto, nome, data, comentario }) {
    return <>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: 8, }}>
            <Image imagem={UsuarioFoto} tipo={'Comentario'} />
            <View style={estilos.foto}>
                <Text style={estilos.usuario}>{nome}</Text>
                <Text style={estilos.ago}>{data}</Text>
            </View>
        </TouchableOpacity>

        <View style={estilos.caixa}>
            <Texto>{comentario}</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({

    foto: {
        flex: 1,
        flexDirection: "row"
    },

    usuario: {
        fontWeight: "bold",
        marginTop: 4,
        marginLeft: 8,
        fontSize: 18,
    },

    ago: {
        color: "#657A46",
        marginTop: 8,
        marginLeft: 12,
        fontSize: 14,
    },

    caixa: {
        marginBottom: 8,
        marginLeft: 48,
        paddingTop: 8,
        paddingBottom: 24,
        paddingHorizontal: 16,
        backgroundColor: "#E4F4CD",
        borderRadius: 15,
    },

})

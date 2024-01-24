import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Image from '../components/Image';
import Texto from '../components/texto';

export default function Interaction({ imagem, styleImg, styleLeg, texto, tipo, acao }) {
    const tipoBotaoEstilo = (tipo) => {
        switch (tipo) {

            case 'Home':
                return {
                    botao: estilos.botaoEvento
                }
                break;

            case 'Highlight':
                return {
                    botao: estilos.botaoDestaque
                }
        }
    }

    const estiloBotao = tipoBotaoEstilo(tipo);

    return (
        <TouchableOpacity style={estiloBotao.botao} onPress={acao}>
            <Image imagem={imagem} tipo={styleImg} />
            <Texto style={styleLeg}>{texto}</Texto>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({

    botaoEvento: {
        marginTop: 16,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        marginRight: 8,
        flexDirection: "row",
    },

    botaoDestaque: {
        width: 140,
        height: 192,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        marginEnd: 15,
        marginTop: 15,
        marginBottom: 20,
        justifyContent: 'center',
        paddingBottom: 30,
        paddingHorizontal: 20,
        alignItems: 'center'
    },

})


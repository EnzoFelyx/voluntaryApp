import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../components/texto';
import Image from '../components/Image';

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

            /* case 5:
                return {
                    botao: estilos.botaoperfil, texto: estilos.textoperfil
                }

            case 6:
                return {
                    botao: estilos.postarCaixa, texto: estilos.postarLegenda
                }
            case 7:
                return {
                    botao: estilos.botaoanexarImagem
                }

            case 8:
                return {
                    botao: estilos.perfilOption
                }

            default:
                break; */
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

    /* 
        botaoanexarImagem: {
            width: 350,
            height: 184,
            marginTop: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            marginBottom: 16
    
        },
    
        postarCaixa: {
    
            width: 80,
            height: 40,
            marginTop: 16,
            paddingVertical: 6,
            backgroundColor: "#649469",
            borderRadius: 30,
            paddingLeft: 12,
            flexDirection: "row",
            marginLeft: "auto",
        },
    
        postarLegenda: {
    
            fontWeight: "bold",
            fontSize: 18,
            color: "white"
        }, */

})


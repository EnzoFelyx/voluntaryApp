import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../components/texto';
import { useNavigation } from '@react-navigation/native';

export default function Botao({ texto, tipo, acao }) {
    const tipoBotaoEstilo = (tipo) => {
        switch (tipo) {

            case 1:
                return {
                    botao: estilos.primeiroBotao.caixa,
                    texto: estilos.primeiroBotao.texto
                }
                break;

            case 2:
                return {
                    botao: estilos.segundoBotao.caixa,
                    texto: estilos.segundoBotao.texto
                }
                break;

            case 3:
                return {
                    botao: estilos.botaoEvento
                }
                break;
            case 4:
                return {
                    botao: estilos.botaoDestaque, texto: estilos.botaoTextoDestaque
                }

            case 5:
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
                break;
        }
    }

    const estiloBotao = tipoBotaoEstilo(tipo);



    return (
        <TouchableOpacity style={estiloBotao.botao} onPress={acao} >
            <Texto style={estiloBotao.texto} >{texto}</Texto>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({

    primeiroBotao: {
        caixa: {
            backgroundColor: "#5B9900",
            paddingVertical: 16,
            marginTop: 16,
            borderRadius: 15,
        },

        texto: {
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold",
        }
    },

    segundoBotao: {
        caixa: {
            backgroundColor: "#F9F9F9",
            paddingVertical: 16,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#5B9900',
        },
        texto: {
            textAlign: "center",
            fontSize: 16,
            fontWeight: "500",
            color: '#5B9900',
        }
    },

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
    },

    botaoTextoDestaque: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },

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
    },

})


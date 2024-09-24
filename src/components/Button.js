import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../components/texto';

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
                    botao: estilos.terceiroBotao.caixa,
                    texto: estilos.terceiroBotao.texto
                }
                break;

            case 4:
                return {
                    botao: estilos.quartoBotao.caixa,
                    texto: estilos.quartoBotao.texto
                }
                break;

            case 9:
                return {
                    botao: estilos.nonoBotao.caixa,
                    texto: estilos.nonoBotao.texto
                }
                break;

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

    terceiroBotao: {
        caixa: {
            backgroundColor: "#84b340",
            paddingVertical: 15,
            borderRadius: 15,
            marginRight: 40,
            marginLeft: 20,
            marginTop: 20
        },
        texto: {
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold",
        }
    },

    quartoBotao: {
        caixa: {
            backgroundColor: "#9dc662",
            paddingHorizontal: 8,
            paddingTop: 6,
            paddingBottom: 10,
            borderRadius: 15,
            marginTop: 'auto',
        },
        texto: {
            fontSize: 16,
            fontWeight: "bold",
            color: '#FFFF',
        }
    },

    nonoBotao: {
        caixa: {
            backgroundColor: "#F9F9F9",
            paddingVertical: 16,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: 'red',
        },
        texto: {
            textAlign: "center",
            fontSize: 16,
            fontWeight: "500",
            color: 'red',
        }
    },
})


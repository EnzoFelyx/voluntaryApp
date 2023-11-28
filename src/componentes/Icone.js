import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Texto from '../componentes/texto';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icone({ icone, tamanho, tipo = null, texto = null, interativo = true, acao }) {

    const tipoIconeEstilo = (tipo) => {
        switch (tipo) {
            case "detalhes":
                return {
                    estilus: estilos.detalhes,
                }
                break;

            case "cabecario":
                return {
                    estilus: estilos.cabecario,
                }
                break;
            case "organizadora":
                return {
                    estilus: estilos.organizadora,
                }
                break;

            case "perfil":
                return {
                    estilus: estilos.perfil,
                }
                break;

            case "adicionarCapa":
                return {
                    estilus: estilos.adicionarCapa,
                }
                break;

            case "info":
                return {
                    estilus: estilos.info,
                }
                break;

            case "perfilOption":
                return {
                    estilus: estilos.perfilOption,
                }
                break;

            case "pesquisa":
                return {
                    estilus: estilos.pesquisa,
                }

            case "mais":
                return {
                    estilus: estilos.mais,
                }

            default:
                return {
                    estilus: estilos.default,
                }
                break;
        }
    }

    const estiloIcone = tipoIconeEstilo(tipo);

    if (interativo == true) {

        return <TouchableOpacity onPress={acao} style={estiloIcone.estilus} >
            <MaterialCommunityIcons name={icone} size={tamanho} color="black" style={{ marginRight: 8 }} />
            <Texto>{texto}</Texto>
        </TouchableOpacity>
    }

    else {
        return <MaterialCommunityIcons name={icone} size={tamanho} color="black" style={estiloIcone.estilus} />
        /*           <Texto>{texto}</Texto> */
    }
}

const estilos = StyleSheet.create({

    detalhes: {
        alignItems: 'center',
        marginRight: 32,
    },
    cabecario: {
        marginLeft: 8,
        marginBottom: 8,
        flexDirection: "row",
    },

    perfil: {
        marginLeft: "auto",
        marginRight: 24,
        marginTop: 4,
    },

    adicionarCapa: {
        alignItems: 'center',

    },

    pesquisa: {
        paddingTop: 16,
        marginLeft: "auto",

    },

    mais: {
        position: 'absolute',
        marginRight: "auto",
        marginRight: 24,
        marginTop: 350
    },


    default: {},
})

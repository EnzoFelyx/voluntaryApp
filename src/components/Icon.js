import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Icon({ familia, icone, tipo, interativo = true, cor, acao = null }) {

    const ObterFamiliaIcone = (familia) => {
        switch (familia) {

            case 'Fontisto':
                return Fontisto;

            case 'Feather':
                return Feather;

            default:
                return MaterialCommunityIcons;
        }
    }

    const FamiliaIcone = ObterFamiliaIcone(familia);

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
        
            case "mais":
                return {
                    estilus: estilos.mais,
                }

            case "option":
                return {
                    estilus: estilos.option,
                }

            default:
                return {
                    estilus: estilos.default,
                }
                break;
        }
    }

    const estiloIcone = tipoIconeEstilo(tipo);

    return <TouchableOpacity disabled={!interativo} onPress={acao} >
        <FamiliaIcone name={icone} style={estiloIcone.estilus} color={cor} />
    </TouchableOpacity>
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
        marginRight: 24,
        fontSize: 30,
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

    option: {
        fontSize: 28,
    },


    default: {},
})

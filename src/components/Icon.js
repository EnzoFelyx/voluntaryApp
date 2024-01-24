import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Icon({ familia, icone, tipo, interativo = true, cor, acao = null }) {

    const ObterFamiliaIcone = (familia) => {
        switch (familia) {

            case 'Entypo':
                return Entypo;

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


            case "perfil":
                return {
                    estilus: estilos.perfil,
                }
                break;

            case "option":
                return {
                    estilus: estilos.option,
                }
        }
    }

    const estiloIcone = tipoIconeEstilo(tipo);

    return <TouchableOpacity disabled={!interativo} onPress={acao} >
        <FamiliaIcone name={icone} style={estiloIcone.estilus} color={cor} />
    </TouchableOpacity>
}


const estilos = StyleSheet.create({

    detalhes: {
        fontSize: 25,
    },

    perfil: {
        marginRight: 24,
        fontSize: 30,
    },

    option: {
        fontSize: 28,
    },
})

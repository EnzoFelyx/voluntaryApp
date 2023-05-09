import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Texto from '../componentes/texto';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icone({ tipo, icone, texto, interativo = true }) {

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

            default:
                break;
        }
    }

    const estiloIcone = tipoIconeEstilo(tipo);

    if (interativo == true) {

        return <TouchableOpacity style={estiloIcone.estilus}>
            <MaterialCommunityIcons name={icone} size={34} color="black" style={{ marginRight: 8, }} />
            <Texto>{texto}</Texto>
        </TouchableOpacity>
    } 

    else {
        return  <View style={estiloIcone.estilus}>
            <MaterialCommunityIcons name={icone} size={30} color="black" style={{ marginRight: 8, }} />
            <Texto>{texto}</Texto>
        </View>
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

    perfil:{
        marginLeft: "auto",
        marginRight: 24,
    },

    adicionarCapa: {
        alignItems: 'center',
    }
})

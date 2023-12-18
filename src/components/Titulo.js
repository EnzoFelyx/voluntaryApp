import React from 'react';
import { StyleSheet } from 'react-native';
import Texto from '../componentes/texto';

export default function Titulo({ entrada, tipo }) {

    const tipoTituloEstilo = (tipo) => {
        switch (tipo) {

            case "Titulo":
                return {
                    estilus: estilos.Titulo,
                }
                break;

            case "TopoVoltar":
                return {
                    estilus: estilos.TopoVoltar,
                }
                break;

            case "subtitle":
                return {
                    estilus: estilos.subtitle,
                }
                break;

            default:
                break;
        }
    }

    const estiloTitulo = tipoTituloEstilo(tipo);

    return <Texto style={estiloTitulo.estilus}>{entrada}</Texto>;
}

const estilos = StyleSheet.create({

    Titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    TopoVoltar: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        marginLeft: 64,
        marginTop: 54,
        marginBottom: 16,
    },

    subtitle: {
        fontWeight: "bold",
        fontSize: 20,
        paddingRight: 8,
        marginBottom: 24,
    },

})



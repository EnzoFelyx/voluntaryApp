import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Texto from '../componentes/texto';

export default function Botao({ texto, tipo }) {

    const tipoBotaoEstilo = (tipo) => {
        switch (tipo) {
            case 1:
                return {
                    botao: estilos.botaoPrimario, texto: estilos.botaoTextoPrimario
                }
                break;
            case 2:
                return {
                    botao: estilos.botaoSecundario, texto: estilos.botaoTextoSecundario
                }
                break;

            case 3:
                return {
                    botao: estilos.botaoEvento
                }
                break;

            default:
                break;
        }
    }

    const estiloBotao = tipoBotaoEstilo(tipo, acao=false);

    return <TouchableOpacity style={estiloBotao.botao} onPress={(acao) => { }}>
        <Texto style={estiloBotao.texto} >{texto}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botaoPrimario: {

        backgroundColor: "#5B9900",
        paddingVertical: 16,
        borderRadius: 15,
    },
    botaoTextoPrimario: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    botaoSecundario: {

        backgroundColor: "#F9F9F9",
        paddingVertical: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#5B9900',
    },
    botaoTextoSecundario: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
        color: '#5B9900',
    },

    botaoEvento: {
        marginTop: 16,
        paddingVertical: 12,
        backgroundColor: "rgba(255,255,255,0.75)",
        borderRadius: 15,
        paddingLeft: 16,
        flexDirection: "row",
    },

})


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
        marginTop: 24,
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
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        marginRight: 8,
        flexDirection: "row",
    },

    botaoDestaque: {
        width:140,
        height:192,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        marginEnd: 15, 
        marginTop: 15,
        justifyContent: 'center',
    },
    
    botaoTextoDestaque: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center'
    },
    
    botaoanexarImagem: {
        width:350,
        height:184,
        marginTop: 16,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255,0.75)",
        borderRadius: 15,
    
    },

    postarCaixa:{

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

        fontWeight:  "bold",
        fontSize: 18,
        color: "white"
    },

})


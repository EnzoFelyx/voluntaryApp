import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';


const width = Dimensions.get('screen').width;


export default function Imagem({ imagem, tipo }) {

   
    const tipoImagemTamanho = (tipo) => {

        switch (tipo) {
            case 'loginImagem':
                return {
                   picture : estilos.loginImagem 
                }
                break;

            case 'recuperarImagem':
                return {
                   picture : estilos.recuperarImagem 
                }
                break;

            case 'perfilFoto':
                return {
                    picture : estilos.perfilFoto 
                }
                break;
            
            case 'RegistrarFoto':
                return {
                    picture : estilos.RegistrarFoto 
                }
                break;

            case 'icone':
                return {
                    picture : estilos.icone 
                }
                break;

            default:
                break;
        }
    }

    const estiloImagem = tipoImagemTamanho(tipo);

    return (
        <Image source={imagem} style={estiloImagem.picture} />
    )
}

const estilos = StyleSheet.create({

    loginImagem: {
        height: 230,
        width: 302,
        backgroundColor: "#E4F4CD"
    },

    perfilFoto: {
        height: 48,
        width: 48,
        borderRadius: 25,
        marginLeft: "auto",
        marginRight: 16,
        
    },

    RegistrarFoto: {
        height: 102,
        width: 102,
        borderRadius: 90,
        marginTop: 26,
        alignSelf: 'center',
        marginBottom: 45,
    },

    recuperarImagem: {
        height: 250,
        width: 250,
        backgroundColor: "#E4F4CD"
    },


    icone: {
        opacity: 0.4,
        height: 25,
        width: 25,
    },
})

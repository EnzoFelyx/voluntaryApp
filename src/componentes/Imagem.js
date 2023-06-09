import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';


const width = Dimensions.get('screen').width;


export default function Imagem({ imagem, tipo }) {


    const tipoImagemTamanho = (tipo) => {

        switch (tipo) {
            case 'loginImagem':
                return {
                    picture: estilos.loginImagem
                }
                break;

            case 'recuperarImagem':
                return {
                    picture: estilos.recuperarImagem
                }
                break;

            case 'perfilFoto':
                return {
                    picture: estilos.perfilFoto
                }
                break;

            case 'RegistrarFoto':
                return {
                    picture: estilos.RegistrarFoto
                }
                break;

            case 'icone':
                return {
                    picture: estilos.icone
                }
                break;
            case 'criadorEvento':
                return {
                    picture: estilos.criadorEvento
                }
            case 'imagemEvento':
                return {
                    picture: estilos.imagemEvento
                }
            case 'perfilDestaque':
                return {
                    picture: estilos.perfilDestaque
                }

            case 'fotoEvento':
                return {
                    picture: estilos.fotoEvento
                }
                break;

            case 'fotoMenor':
                return {
                    picture: estilos.fotoMenor
                }
                break;

            case 'Upload':
                return {

                    picture: estilos.Upload
                }
                break;

            case 'Comentario':
                return {
                    picture: estilos.Comentario
                }
                break;

            case 'Perfil':
                return {
                    picture: estilos.Perfil
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

    criadorEvento: {
        height: 25,
        width: 25,
        borderRadius: 25,
    },

    imagemEvento:
    {
        width: 328,
        height: 158,
        resizeMode: 'contain'
    },
    perfilDestaque:
    {
        width: 30,
        height: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'

    },

    fotoEvento: {
        height: 657 / 1.85,
        width: 429,
    },

    Comentario: {
        height: 40,
        width: 40,
        borderRadius: 25,
    },

    Upload: {
        width: 50,
        height: 50,

    },

    fotoMenor: {
        height: 32,
        width: 32,
        borderRadius: 25,
    },

    Perfil: {
        height: 156,
        width: 156,
        borderRadius: 90,
        marginTop: 5,
        alignSelf: 'center',
    },
})

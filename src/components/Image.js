import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Imagem({ imagem, tipo }) {

    const tipoImagemTamanho = (tipo) => {

        switch (tipo) {
            case 'loginImagem':
                return {
                    picture: estilos.loginImagem
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

            /*  case 'Upload':
                 return {
                     picture: estilos.Upload
                 }
                 break;
 
             case 'Comentario':
                 return {
                     picture: estilos.Comentario
                 }
                 break; */

            case 'Perfil':
                return {
                    picture: estilos.Perfil
                }
                break;

            case 'icone':
                return {
                    picture: estilos.icone
                }
                break;


            case 'Elos': //temporario
                return {
                    picture: estilos.Elos
                }
                break;

            case 'Loading': //temporario
                return {
                    picture: estilos.Loading
                }
                break;

            case 'mapa':
                return {
                    picture: estilos.mapa
                }
                break;

            case 'capaImagem':
                return {
                    picture: estilos.capaImagem
                }
                break;

            case 'fotosEvento':
                return {
                    picture: estilos.fotosEvento
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
        height: 300,
        width: 350,
        alignSelf: 'center',
        backgroundColor: "#E4F4CD",
    },

    perfilFoto: {
        height: 48,
        width: 48,
        borderRadius: 25,
        marginLeft: "auto",
        marginRight: 24,
    },

    RegistrarFoto: {
        height: 102,
        width: 102,
        borderRadius: 90,
        marginVertical: 26,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#accb7f',
    },

    imagemEvento: {
        marginTop: 20,
        width: 328,
        height: 158,
        resizeMode: 'contain'
    },

    perfilDestaque: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: '#accb7f',
        borderRadius: 45,
    },

    fotoEvento: {
        height: 657 / 1.85,
        width: 429,
    },

    /* Comentario: {
        height: 40,
        width: 40,
        borderRadius: 25,
    },

    Upload: {
        width: 50,
        height: 50,

    }, */

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

    Elos: {
        height: 100,
        width: 110,
        alignSelf: 'center',
    },

    Loading: {
        marginTop: 8,
        height: 22,
        width: 188
    },

    icone: {
        opacity: 0.4,
        height: 25,
        width: 25,
    },

    mapa: {
        height: 54,
        width: 52,
    },

    capaImagem: {
        height: 200,
        width: 350,
    },

    fotosEvento: {
        height: 70,
        width: 70,
    },
})

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Image from '../components/Image';
import Texto from '../components/texto';
import Button from './Button';

export default function Interaction({ imagem, styleImg, styleLeg, texto, tipo, acao }) {

    console.log(styleImg)
     
    const tipoBotaoEstilo = (tipo) => {
        switch (tipo) {

            case 'Home':
                return {
                    botao: estilos.botaoEvento
                }
                break;

            case 'Highlight':
                return {
                    botao: estilos.botaoDestaque
                }
        }
    }

    const estiloBotao = tipoBotaoEstilo(tipo);

    return (
        <View>
            <TouchableOpacity style={estiloBotao.botao} onPress={acao}>
                <Image imagem={imagem} tipo={styleImg} />
                {
                    styleImg === 'perfilDestaque' ? (<>
                        <Texto style={styleLeg}>{texto}</Texto>
                        <Button texto={'conectar-se'} tipo={4} />
                    </>
                    ) : <></>
                }
            </TouchableOpacity>
            {
                styleImg === 'imagemEvento' ? (
                    <Texto style={styleLeg}>{texto}</Texto>
                ) : <></>
            }
        </View>
    );
}

const estilos = StyleSheet.create({

    botaoEvento: {
        marginTop: 8,
        paddingTop: 12,
        paddingBottom: 12,
        borderWidth: 0.5,
        borderRadius: 15,
        marginRight: 16,
        flexDirection: "row",
    },

    botaoDestaque: {
        width: 160,
        height: 210,
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: "#FFFF",
        marginEnd: 15,
        marginVertical: 15,
        paddingBottom: 15,
        paddingTop: 20,
        paddingHorizontal: 14,
        alignItems: 'center'
    },

})


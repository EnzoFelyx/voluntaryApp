import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import Image from '../components/Image';
import Texto from '../components/texto';
import Button from './Button';
import { amarrarSeguidor, procurarAmigo } from '../services/requests/usuario';
import { useIsFocused } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Interaction({ imagem, styleImg, styleLeg, texto, tipo, acao, cover, id = null }) {

    const isFocused = useIsFocused();

    const [myFriend, setIsMyFriend] = useState(true);
    const [updateTrigger, setUpdateTrigger] = useState(false);

    async function isAmigo(id) {
        const amigo = await procurarAmigo(id);
        setIsMyFriend(amigo)
    }

    async function amarrarAmigo(id) {
        const amigo = await amarrarSeguidor(id);
        setUpdateTrigger(!updateTrigger);
    }

    useEffect(() => {
        if (id) {
            isAmigo(id)
        }
    }, [updateTrigger, isFocused]);

    const tipoBotaoEstilo = (tipo) => {
        switch (tipo) {

            case 'Home':
                return {
                    botao: estilos.botaoEvento
                }
                break;

            case 'subsEvento':
                return {
                    botao: estilos.subsEvento
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
                <Image imagem={imagem} tipo={styleImg} cover={cover} />
                {
                    styleImg === 'perfilDestaque' ? (<>
                        <Texto style={styleLeg}>{texto}</Texto>
                        {
                            myFriend ? (
                                <>
                                    <Button
                                        texto="Conectar-se"
                                        tipo={4}
                                        acao={() => amarrarAmigo(id)}
                                    />
                                </>
                            ) : (
                                <Button
                                    texto="Seguindo"
                                    tipo={6}
                                    acao={() => amarrarAmigo(id)}
                                />
                            )
                        }

                    </>
                    ) : <></>
                }
            </TouchableOpacity>
            {
                styleImg === 'imagemEvento' || styleImg === 'subsEvento' ? (
                    <Texto style={styleLeg}>{texto}</Texto>
                ) : <></>
            }
        </View>
    );
}

const estilos = StyleSheet.create({

    subsEvento: {
        marginTop: 8,
        borderWidth: 0.8,
        borderRadius: 15,
        marginRight: 16,
        justifyContent: 'center',
        flexDirection: "row",
        width: '100%',
        height: height * 0.25,
        overflow: "hidden",
    },

    botaoEvento: {
        marginTop: 8,
        overflow: "hidden",
        borderWidth: 0.8,
        borderRadius: 15,
        marginRight: 16,
        width: width * .8,
        height: height * 0.25,
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


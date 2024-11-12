import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Image from './Image';
import Texto from './texto';

export default function Owner({ image, nome, acao, type = 'fotoMenor', pessoa }) {

    const typeOwner = (tipo) => {
        switch (tipo) {

            case 'Explorar':
                return estilos.negrito;
                break;

            case 'fotoMenor':
                return estilos.nome;
                break;
        }
    }

    const TypeOwner = typeOwner(type);

    return <TouchableOpacity style={estilos.organizadora} onPress={acao}>
        <Image imagem={image} tipo={type} />
        <View>
            <Texto style={TypeOwner}>{nome}</Texto>
            {type === 'Explorar' && pessoa &&
                <Text style={estilos.pessoa}>
                    {pessoa === 'person' ? 'Voluntário' : 'Ong'}
                </Text>
            }
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({

    organizadora: {
        flexDirection: "row",
        marginLeft: 8,
        marginBottom: 16,
        marginTop: 8,
    },
    nome: {
        fontSize: 16,
        marginLeft: 8,
        marginTop: 4,
    },
    pessoa: {
        fontSize: 14,
        marginLeft: 14,
        color: 'gray',
        marginTop: 3
    },
    negrito: {
        fontSize: 16,
        marginLeft: 8,
        marginTop: 4,
        alignSelf: 'center',
        marginLeft: 15,
        fontWeight: 'bold'
    }
})

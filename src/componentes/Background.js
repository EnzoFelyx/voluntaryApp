import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function Background({ children, back }) {

    const tipoFundoEstilo = (back) => {

        switch (back) {
            case 'fundo':
                return {
                    background: estilos.fundo
                }
                break;

            case 'quadrado1':
                return {
                    background: estilos.quadrado1
                }
                break;

            case 'quadrado2':
                return {
                    background: estilos.quadrado2
                }
                break;

            case 'quadrado3':
                return {
                    background: estilos.quadrado3
                }
                break;
                
            default:
                break;
        }
    }

    const estiloFundo = tipoFundoEstilo(back);

    return <SafeAreaView style={[estiloFundo.background, { flex: 1 }]}>
        {children}
    </SafeAreaView>
}

const estilos = StyleSheet.create({

    fundo: {
        backgroundColor: "#E4F4CD",
    },

    quadrado1: {
        width: "93%",
        marginLeft: 15,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingVertical: 24,
        paddingHorizontal: 30,
        backgroundColor: "#CAF38D",
    },

    quadrado2: {
        width: "94%",
        marginLeft: 12,
        paddingHorizontal: 16,
        backgroundColor: '#CAF38D',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingVertical: 24,
    },

    quadrado3: {
        width: "94%",
        marginLeft: 12,
        paddingHorizontal: 16,
        backgroundColor: '#D7FF9C',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: 8,
        paddingVertical: 24,
        top: -70
    },
})
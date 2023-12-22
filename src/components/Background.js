import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Background({ children, back }) {

    const tipoFundoEstilo = (back) => {

        switch (back) {
            case 'fundo':
                return {
                    background: estilos.fundo
                }
                break;

            case 'backOne':
                return {
                    background: estilos.backOne
                }
                break;

            case 'backTwo':
                return {
                    background: estilos.backTwo
                }
                break;

            case 'quadrado3':
                return {
                    background: estilos.quadrado3
                }
                break;

            default:
                return {
                    background: estilos.backOne
                }
                break;
        }
    }

    const estiloFundo = tipoFundoEstilo(back);

    return <View style={estiloFundo.background}>
        {children}
    </View>
}

const estilos = StyleSheet.create({

    fundo: {

    },

    backOne: {
        marginHorizontal: 15,
        borderRadius: 32,
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#CAF38D",
    },

    backTwo: {
        marginHorizontal: 15,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#CAF38D',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingTop: 24,
        flex: 1,
    },

    quadrado3: {
        width: "94%",
        marginLeft: 12,
        paddingHorizontal: 16,
        backgroundColor: '#D7FF9C',
        borderRadius: 24,
        marginTop: 8,
        paddingTop: 24,
        top: -70,
        paddingBottom: 50,
    },
})
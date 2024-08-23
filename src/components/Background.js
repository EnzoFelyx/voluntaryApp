import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Background({ children, back }) {

    const tipoFundoEstilo = (back) => {

        switch (back) {

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

            case 'backThree':
                return {
                    background: estilos.backThree
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

    backOne: {
        marginHorizontal: 15,
        marginBottom: 24,
        borderRadius: 32,
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#CAF38D",
    },

    backTwo: {
        /* padding: 16, */
    },

    backThree: {
        
        marginHorizontal: 15,
        paddingHorizontal: 16,
        backgroundColor: '#D7FF9C',
        borderRadius: 24,
        marginTop: 8,
        paddingTop: 24,
        top: -40,
        paddingBottom: 50,
    },
})
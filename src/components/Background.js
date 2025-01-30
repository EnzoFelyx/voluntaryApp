import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const height = Dimensions.get('window').height;


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
        marginBottom: 30,
        height: height * 0.75,
        borderRadius: 32,
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#CAF38D",
    },

    backTwo: {
        borderRadius: 30,
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        marginTop: 16,
        backgroundColor: "#FFFF",
    },

    backThree: {
        flex: 1,
        top: -20,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 25,
        backgroundColor: '#D7FF9C',
        paddingTop: 24,
    },
})
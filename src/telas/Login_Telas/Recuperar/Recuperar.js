import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Background from '../../../componentes/Background';
import Imagem from '../../../componentes/Imagem';
import fotoRecuperar from '../../../../assets/recuperar.png';

export default function Recuperar({ }) {
    return <SafeAreaView style={{ height: "100%" }}>
        <Background back={"fundo"}>
            <View style={{ alignItems: 'center' }}>
                <Imagem imagem={fotoRecuperar} tipo={"recuperarImagem"} />
            </View>
            <Background back={"quadrado1"}>

            </Background>
        </Background>
    </SafeAreaView>
}
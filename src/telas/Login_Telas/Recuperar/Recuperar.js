import React from 'react';
import { SafeAreaView, View } from 'react-native';
import fotoRecuperar from '../../../../assets/loginTelas/recuperar.png';
import Background from '../../../componentes/Background';
import Imagem from '../../../componentes/Imagem';
import Pedido from './Componentes/Pedido';

export default function Recuperar({ recuperar }) {
    return <SafeAreaView style={{ height: "100%" }}>
        <Background back={"fundo"}>
            <View style={{ alignItems: 'center' }}>
                <Imagem imagem={fotoRecuperar} tipo={"recuperarImagem"} />
            </View>
            <Background back={"quadrado1"}>
                <Pedido {...recuperar} />
            </Background>
        </Background>
    </SafeAreaView>
}

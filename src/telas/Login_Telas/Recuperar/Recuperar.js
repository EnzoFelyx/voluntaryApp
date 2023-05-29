import React from 'react';
import { ScrollView } from 'react-native';
import fotoRecuperar from '../../../../assets/loginTelas/recuperar.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Pedido from './Componentes/Pedido';

export default function Recuperar({ recuperar }) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Cabecalho Foto={fotoRecuperar} icone={true} fotoEstilo={"recuperarImagem"}/>
            <Background back={"quadrado1"}>
                <Pedido {...recuperar} />
            </Background>
        </Background>
    </ScrollView>
}

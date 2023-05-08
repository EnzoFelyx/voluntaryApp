import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Pedido from './Componentes/Pedido';
import Topo from './Componentes/Topo';

export default function Recuperar({ recuperar }) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Topo/>
            <Background back={"quadrado1"}>
                <Pedido {...recuperar} />
            </Background>
        </Background>
    </ScrollView>
}

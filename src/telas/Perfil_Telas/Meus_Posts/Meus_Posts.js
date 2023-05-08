import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Comentario from './Componentes/Comentario';
import Topo from './Componentes/Topo';

export default function Meus_Posts({topo, comentario}) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Topo {...topo}/>
            <Background back={"quadrado1"}>
                <Comentario {...comentario}/>
            </Background>
        </Background>
    </ScrollView>
}
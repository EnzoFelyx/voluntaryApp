import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Comentario from './Componentes/Comentario';
import Cabecalho from '../../../componentes/Cabecalho';
export default function Meus_Posts({topo, comentario}) {
    return <ScrollView>
        <Background back={"fundo"}>
            <Cabecalho titulo={topo.titulo} icone={true} />
            <Background back={"quadrado1"}>
                <Comentario {...comentario}/>
            </Background>
        </Background>
    </ScrollView>
}
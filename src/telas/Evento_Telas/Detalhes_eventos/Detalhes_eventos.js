import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../componentes/Background';
import Topo from './componentes/Topo';
import Cabecario from './componentes/Cabecario';
import Corpo from './componentes/Corpo';
import Interativos from './componentes/Interativos';


export default function Detalhes_eventos({dados, interacoes, corpo}) {
    return (
        <ScrollView>
            <Background back={"fundo"}>
                <Topo/>
                <Background back={"quadrado3"}>
                    <Cabecario {...dados}/>
                    <Interativos {...interacoes}/>
                    <Corpo {...corpo}/>
                </Background>
            </Background>
        </ScrollView>
    )
}
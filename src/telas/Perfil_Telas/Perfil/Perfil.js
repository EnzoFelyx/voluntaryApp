import React from 'react';
import { ScrollView,View,Text } from 'react-native';
import Background from '../../../componentes/Background';
import Interativos from './Componentes/Interativos';
import Topo from './Componentes/Topo';
import VisaoGeral from './Componentes/VisaoGeral';
import Meu_elo from './Componentes/Meu_elo';
import Voltar from '../../../componentes/Voltar';
import { useRoute } from '@react-navigation/native';



export default function Perfil({ topo, botoes }) {

    const navigation = useRoute();
          
    const rotaAtual = navigation.name;

        


    return (
            
        <ScrollView>
            <Background back={"fundo"}>
            
            {rotaAtual === 'StackPerfil' ? 
            (
                <Topo {...topo} />
            ) 
            : 
            (
                <>
                <Voltar />
                <Topo {...topo} />
                </>
            )}
             
                <Background back={"quadrado2"}>
                    <VisaoGeral />
                    <Meu_elo />
                    <Interativos {...botoes} />
                </Background>
            </Background>
        </ScrollView>
    )
}
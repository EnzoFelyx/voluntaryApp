import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../../components/Background';
import Return from '../../../components/Return';
import useTopo from '../../../hooks/useTopo';
import Interactions from './components/Interactions';
import Overview from './components/Overview';
import Rank from './components/Rank';
import Topo from './components/Topo';

export default function Perfil() {

  const navigation = useRoute();
  const rotaAtual = navigation.name;
  const dadosDoUsuario = useTopo();

  return (

    <ScrollView>
      <Background back={"fundo"}>

        {rotaAtual === 'StackPerfil' ?
          (
            <Topo />
          )
          :
          (
            <>
              <Return />
              <Topo />
            </>
          )}

        <Background back={"quadrado2"}>
          <Overview {...dadosDoUsuario} />
          <Rank />
          <Interactions />
        </Background>
      </Background>
    </ScrollView>
  )
}
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../components/Background';
import Return from '../../components/Return';
import useTop from '../../hooks/useTop';
import Interactions from './components/Interactions';
import Overview from './components/Overview';
import Rank from './components/Rank';
import Topo from './components/Topo';
import Screen from '../../components/Screen';

export default function Perfil() {

  const navigation = useRoute();
  const rotaAtual = navigation.name;
  const dadosDoUsuario = useTop();

  return (
    <Screen>
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

      <Background back={"backTwo"}>
        <Overview {...dadosDoUsuario} />
        <Rank />
        <Interactions />
      </Background>
    </Screen>
  )
}
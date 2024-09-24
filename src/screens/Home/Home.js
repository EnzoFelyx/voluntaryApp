import { React } from 'react';
import { View } from 'react-native';
import { home } from "../../../config/text.json";
import Screen from '../../components/Screen';
import Top from '../../components/Top';
import useTopo from '../../hooks/useTop';
import Buscar from './components/Buscar';
import Highlights from './components/Highlights';
import List from './components/List';
import Ongs from './components/Ongs';
import Trends from './components/Trends';

export default function Home() {

  const dadosDoUsuario = useTopo();
  const title = home.title

  return (
    <Screen>
      <Top tipo={'Perfil'} Foto={{ uri: dadosDoUsuario.perfil }} titulo={title} />
      <View style={{ paddingHorizontal: 16, paddingTop: 16}}>
        <Buscar />
        <List highlights={Highlights} trends={Trends} ongs={Ongs} />
      </View>
    </Screen>
  )
}
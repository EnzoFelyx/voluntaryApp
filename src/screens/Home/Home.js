import { React } from 'react';
import { home } from "../../../config/text.json";
import Background from '../../components/Background';
import Top from '../../components/Top';
import useTopo from '../../hooks/useTop';
import Highlights from './components/Highlights';
import List from './components/List';
import Ongs from './components/Ongs';
import Trends from './components/Trends';
import Screen from '../../components/Screen';
import { View } from 'react-native';
import Buscar from './components/Buscar';

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
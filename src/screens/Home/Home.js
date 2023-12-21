import { React } from 'react';
import { ScrollView } from 'react-native';
import { home } from "../../../config/text.json";
import Background from '../../components/Background';
import Top from '../../components/Top';
import useTopo from '../../hooks/useTop';
import Highlights from './components/Highlights';
import List from './components/List';
import Ongs from './components/Ongs';
import Trends from './components/Trends';

export default function Home() {

  const dadosDoUsuario = useTopo();
  const title = home.title

  return (
    <ScrollView>
      <Background back={"fundo"}>
        <Top Foto={{ uri: dadosDoUsuario.perfil }} titulo={title} />
        <Background back={"quadrado2"}>
          <List highlights={Highlights} trends={Trends} ongs={Ongs} />
        </Background>
      </Background>
    </ScrollView>
  )
}
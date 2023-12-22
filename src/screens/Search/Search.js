import { React } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { search } from "../../../config/text.json";
import Background from '../../components/Background';
import Top from '../../components/Top';
import useTop from '../../hooks/useTop';
import Bloom from './components/Bloom';
import Screen from '../../components/Screen';
import { ScrollView } from 'react-native';

export default function Pesquisar_eventos() {

  const dadosDoUsuario = useTop();
  const title = search.title

  return (
    <Screen type={'static'}>
      <Top Foto={{ uri: dadosDoUsuario.perfil }} titulo={title} />
      <Background back={"backTwo"}>
          <Bloom />
      </Background>
    </Screen>
  )
}
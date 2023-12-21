import { React } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { search } from "../../../config/text.json";
import Background from '../../components/Background';
import Top from '../../components/Top';
import useTop from '../../hooks/useTop';
import Bloom from './components/Bloom';

export default function Pesquisar_eventos() {

  const dadosDoUsuario = useTop();
  const title = search.title

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Background back={"fundo"}>
        <Top Foto={{ uri: dadosDoUsuario.perfil }} titulo={title} />
        <Background back={"quadrado2"}>
          <Bloom />
        </Background>
      </Background>
    </SafeAreaView>
  )
}
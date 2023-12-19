import { React } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { buscar } from "../../../../config/text.json";
import Background from '../../../componentes/Background';
import Top from '../../../componentes/Cabecalho';
import useTopo from '../../../hooks/useTopo';
import Bloom from './components/Bloom';

export default function Pesquisar_eventos() {

  const dadosDoUsuario = useTopo();
  const titulo = buscar.titulo

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Background back={"fundo"}>
        <Top Foto={{ uri: dadosDoUsuario.perfil }} titulo={titulo} />
        <Background back={"quadrado2"}>
          <Bloom />
        </Background>
      </Background>
    </SafeAreaView>
  )
}
import { React } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import useTopo from '../../../hooks/useTopo';
import Busca from './componentes/Busca';

export default function Pesquisar_eventos({ topo, eventos }) {

  const dadosDoUsuario = useTopo();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Background back={"fundo"}>
        <Cabecalho Foto={{ uri: dadosDoUsuario.perfil }} titulo={topo.titulo} />
        <Background back={"quadrado2"}>
          <Busca {...topo} {...eventos} />
        </Background>
      </Background>
    </SafeAreaView>
  )
}
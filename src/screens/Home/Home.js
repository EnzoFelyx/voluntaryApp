import { React } from 'react';
import { ScrollView, View } from 'react-native';
import { home } from "../../../../config/text.json";
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import useTopo from '../../../hooks/useTopo';
import Destaque from './componentes/Destaques';
import Eventos from './componentes/Eventos';
import Lista from './componentes/Lista';
import Ongs from './componentes/Ongs';

export default function Home() {

  const dadosDoUsuario = useTopo();
  const titulo = home.titulo

  return (
    <ScrollView>
      <Background back={"fundo"}>
        <Cabecalho Foto={{ uri: dadosDoUsuario.perfil }} titulo={titulo} />
        <Background back={"quadrado2"}>
          <Lista destaque={Destaque} eventos={Eventos} ongs={Ongs} />
        </Background>
      </Background>
    </ScrollView>
  )
}
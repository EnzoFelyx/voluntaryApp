import { React } from 'react';
import { search } from "../../../config/text.json";
import Background from '../../components/Background';
import Screen from '../../components/Screen';
import Top from '../../components/Top';
import useTop from '../../hooks/useTop';
import Bloom from './components/Bloom';

export default function Pesquisar_eventos() {

  const dadosDoUsuario = useTop();
  const title = search.title

  return (
    <Screen type={'static'}>
      <Top tipo={'Perfil'} Foto={{ uri: dadosDoUsuario.perfil }} titulo={title} />
      <Background back={"backTwo"}>
        <Bloom />
      </Background>
    </Screen>
  )
}
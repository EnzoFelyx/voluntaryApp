import React from 'react';

import { subscribed } from '../../../config/text.json';
import Background from '../../components/Background';
import Screen from '../../components/Screen';
import Top from '../../components/Top';
import useTopo from '../../hooks/useTop';
import List from './components/List';


export default function SeusEventos() {

  const title = subscribed.title
  const dadosDoMeuUsuario = useTopo();

  return (
    <Screen>
      <Top Foto={{ uri: dadosDoMeuUsuario.perfil }} titulo={title} />
      <Background back="backTwo">
        <List />
      </Background>
    </Screen>
  );
}

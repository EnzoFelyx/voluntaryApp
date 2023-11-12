import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';
import { pegarEventos } from '../../../servicos/requisicoes/eventos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pegarDadosUsuario } from '../../../servicos/requisicoes/usuario';
import { pegarEventosInscritos } from '../../../servicos/requisicoes/eventos';

export default function SeusEventos({ topo, interacoes }) {
  const [dadosEventos, setDadosEventos] = useState({});
  const [dadosAmarra, setDadosAmarra] = useState({});
  const [dadosDoUsuario, setDadosDoUsuario] = useState({});

  useEffect(() => {
    async function fetchData() {
      const id = await AsyncStorage.getItem('id');

      if (!id) {
        return null;
      }

      const resultadoIns = await pegarEventosInscritos(id);
      if (resultadoIns) {
        setDadosAmarra(resultadoIns);

        // Fetch data for each subscribed event
        const eventosPromises = resultadoIns.map(async (inscricao) => {
          const resultado = await pegarEventos(inscricao.eventoId);
          return resultado;
        });

        // Wait for all promises to resolve
        const eventos = await Promise.all(eventosPromises);

        // Update state with all events
        setDadosEventos(eventos);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function buscarDadosDoUsuario() {
      const id = await AsyncStorage.getItem('id');

      if (!id) {
        return null;
      }

      const resultado = await pegarDadosUsuario(id);
      if (resultado) {
        setDadosDoUsuario(resultado);
      }
    }
    buscarDadosDoUsuario();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Background back="fundo">
        <Cabecalho Foto={{ uri: dadosDoUsuario.perfil }} titulo={topo.titulo} icone={false} />
        <Background back="quadrado2">
          <View style={{ flex: 1 }}>
            <Lista {...interacoes} dadosEventos={dadosEventos} />
          </View>
        </Background>
      </Background>
    </SafeAreaView>
  );
}

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';

import Interation from '../../../components/Interation';
import Texto from '../../../components/texto';
import estilos from './estilos';

export default function Destaques({ dadosDoUsuario, titulo }) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Interation
      tipo={'Highlight'}
      imagem={{ uri: item.perfil }}
      styleImg={'perfilDestaque'}
      texto={item.nome}
      styleLeg={{ marginVertical: 10, textAlign: 'center', }}
      acao={() => navigation.navigate('PerfilCriadorEvento', { item })}
    />
  );

  return <View style={estilos.container}>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <FlatList
      data={dadosDoUsuario}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
    />
  </View>
}



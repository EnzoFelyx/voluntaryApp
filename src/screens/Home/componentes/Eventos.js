import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Botao from '../../../../componentes/Botao';
import Imagem from "../../../../componentes/Imagem";
import Organizadora from '../../../../componentes/Organizadora';
import Texto from '../../../../componentes/texto';
import estilos from './estilos';

export default function Eventos({ dadosEventos, titulo }) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, }}>
      <Botao tipo={3} texto={
        <View>
          <Imagem imagem={{ uri: item.imagemEvento }} tipo={'imagemEvento'} />
          <Text style={{ marginLeft: 12, fontSize: 16 }}>{item.nomeEvento}</Text>
        </View>
      }
        acao={() => navigation.navigate('Detalhes', { item })}
      />
      <View style={{ marginTop: 12, marginRight: 16 }}>
        <Organizadora image={{ uri: item.imagemCriadorEvento }} nome={item.criadorEvento} />
      </View>
    </View>
  );

  return <View style={estilos.container}>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <FlatList
      data={dadosEventos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
    />
  </View>
}
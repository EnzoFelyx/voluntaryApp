import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Image from "../../../components/Image";
import Owner from '../../../components/Owner';
import Texto from '../../../components/texto';
import estilos from './estilos';
import Interation from '../../../components/Interation'

export default function Trends({ dadosEventos, titulo }) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, }}>

      <Interation
        tipo={'Home'}
        imagem={{ uri: item.imagemEvento }}
        styleImg={'imagemEvento'}
        texto={item.nomeEvento}
        styleLeg={{ margin: 8, position: "absolute" }}
        acao={() => navigation.navigate('Detalhes', { item })}
      />
      <Owner image={{ uri: item.imagemCriadorEvento }} nome={item.criadorEvento} />
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
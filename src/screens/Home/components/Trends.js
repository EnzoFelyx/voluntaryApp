import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Button from '../../../../components/Button';
import Image from "../../../../components/Image";
import Owner from '../../../../components/Owner';
import Texto from '../../../../components/texto';
import estilos from './estilos';

export default function Trends({ dadosEventos, titulo }) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, }}>
      <Button tipo={3} texto={
        <View>
          <Image imagem={{ uri: item.imagemEvento }} tipo={'imagemEvento'} />
          <Text style={{ marginLeft: 12, fontSize: 16 }}>{item.nomeEvento}</Text>
        </View>
      }
        acao={() => navigation.navigate('Detalhes', { item })}
      />
      <View style={{ marginTop: 12, marginRight: 16 }}>
        <Owner image={{ uri: item.imagemCriadorEvento }} nome={item.criadorEvento} />
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
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import Interation from '../../../components/Interation';
import Image from "../../../components/Image";
import Owner from '../../../components/Owner';
import Texto from '../../../components/texto';
import estilos from './estilos';

export default function Ongs({ dadosOng, titulo }) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, }}>
      <Interation
        tipo={'Home'}
        imagem={{ uri: item.imagemOng }}
        styleImg={'imagemEvento'}
        acao={() => navigation.navigate('PerfilCriadorEvento', { item })}
      />
      <View style={{ marginTop: 12, marginRight: 16, }}>
        <Owner image={{ uri: item.perfilOng }} nome={item.nomeOng} acao={() => navigation.navigate('PerfilCriadorEvento', { item })} />
      </View>
    </View>
  );

  return <View style={estilos.container}>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <FlatList
      data={dadosOng}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
    />
  </View>

}




import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import Button from '../../../components/Button';
import Image from "../../../components/Image";
import Texto from '../../../components/texto';
import estilos from './estilos';

export default function Destaques({ dadosDoUsuario, titulo }) {
  
  const navigation = useNavigation();

  const renderItem = ({ item }) => (

    <Button tipo={4} texto={
      <View>
        <Image imagem={{ uri: item.perfil }} tipo={'perfilDestaque'} />
        <Texto style={{ fontWeight: "bold", fontSize: 14, }}>{item.nome}</Texto>
      </View>}
      acao={() => navigation.navigate('PerfilCriadorEvento', { item })}
    /> //novo componente?
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



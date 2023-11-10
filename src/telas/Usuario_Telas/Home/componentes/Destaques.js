import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Botao from '../../../../componentes/Botao';
import Imagem from "../../../../componentes/Imagem";
import { useNavigation } from '@react-navigation/native';

function Destaques({dadosDoUsuario}) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (

    <Botao tipo={4} texto={
      <View>
        <Imagem imagem={{uri:item.perfil}} tipo={'perfilDestaque'} />
        <Text style={{ fontWeight: "bold", fontSize: 14, }}>{item.nome}</Text>
      </View>}
      acao={() => navigation.navigate('PerfilCriadorEvento', { item })} 
    />
  );

  return (
    <FlatList
    data={dadosDoUsuario}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()} 
    horizontal={true}
  />
  );
}

export default Destaques;



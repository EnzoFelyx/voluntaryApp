import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Jose from "../../../../../assets/exemplos/Jose.png";
import Maria from "../../../../../assets/exemplos/Maria.png";
import Botao from '../../../../componentes/Botao';
import Imagem from "../../../../componentes/Imagem";

const data = [
  {
    id: '1',
    nomeDestaque: 'Cleyton Silva',
    perfilDesaque: Jose
  },
  {
    id: '2',
    nomeDestaque: 'Maria Eduarda',
    perfilDesaque: Maria
  },
  {
    id: '3',
    nomeDestaque: 'Cleyton Silva',
    perfilDesaque: Jose
  },
  {
    id: '4',
    nomeDestaque: 'Maria Eduarda',
    perfilDesaque: Maria
  },

];

const Destaques = () => {
  const renderItem = ({ item }) => (

    <Botao tipo={4} texto={
      <View>
        <Imagem imagem={item.perfilDesaque} tipo={'perfilDestaque'} />
        <Text style={{ fontWeight: "bold", fontSize: 14, }}>{item.nomeDestaque}</Text>
      </View>}
      acao={() => { }}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );
}

export default Destaques;



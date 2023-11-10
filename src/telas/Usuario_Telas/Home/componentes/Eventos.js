import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Imagem from "../../../../componentes/Imagem";
import Botao from '../../../../componentes/Botao';
import Organizadora from '../../../../componentes/Organizadora';
import { useNavigation } from '@react-navigation/native';

function Eventos({ dadosEventos }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
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

  return (
    <FlatList
      data={dadosEventos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} 
      horizontal={true}
    />
  );
}

export default Eventos;

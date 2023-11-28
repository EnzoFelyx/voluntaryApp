import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import Botao from '../../../../componentes/Botao';
import Imagem from "../../../../componentes/Imagem";
import Organizadora from '../../../../componentes/Organizadora';
import Texto from '../../../../componentes/texto';
import estilos from './estilos';


export default function Ongs({ dadosOng, titulo }) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, }}>
      <Botao tipo={3} texto={
        <View>
          <Imagem imagem={{ uri: item.imagemOng }} tipo={'imagemEvento'} />
        </View>}
        acao={() => navigation.navigate('PerfilCriadorEvento', { item })}
      />
      <View style={{ marginTop: 12, marginRight: 16, }}>
        <Organizadora image={{ uri: item.perfilOng }} nome={item.nomeOng} acao={() => navigation.navigate('PerfilCriadorEvento', { item })} />
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




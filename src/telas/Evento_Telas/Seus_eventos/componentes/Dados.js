import React from 'react';
import { FlatList, View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Blooddonation from "../../../../../assets/exemplos/Blooddonation.png"
import Jose from "../../../../../assets/exemplos/Jose.png";
import Maria from "../../../../../assets/exemplos/Maria.png";
import doacaoCasacos from "../../../../../assets/exemplos/doacaoCasacos.png";
import Imagem from "../../../../componentes/Imagem";
import Linha from '../../../../componentes/Linha';
import Organizadora from '../../../../componentes/Organizadora';
import { useNavigation } from '@react-navigation/native';
import Botao from '../../../../componentes/Botao';

const data = [
  {
    id: '1',
    title: 'Doação de sangue',
    imageUrl: Blooddonation,
    criador: 'Cleyton Silva Nascimento',
    perfilCriador: Jose
  },

  {
    id: '2',
    title: 'Doação de casacos',
    imageUrl: doacaoCasacos,
    criador: 'Maria Eduarda Ferreira',
    perfilCriador: Maria
  },
];
function Eventos()
{

  const navigation = useNavigation();


  const renderItem = ({ item }) => (
    <View style={{ flex: 1}}>
      <Botao tipo={3} texto={
        <View>
          <Imagem imagem={item.imageUrl} tipo={'imagemEvento'} />
          <Text style={{marginLeft: 12, fontSize: 16,}}>{item.title}</Text>
        </View>
      }
        acao={() => navigation.navigate ('Detalhes')}
      />
      <View style={{ marginTop: 12, marginRight: 16, }}>
        <Organizadora image={item.perfilCriador} nome={item.criador} acao={() => navigation.navigate('PerfilCriadorEvento')}/>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}


const estilo = StyleSheet.create({
  container: {

  },

})

export default Eventos;


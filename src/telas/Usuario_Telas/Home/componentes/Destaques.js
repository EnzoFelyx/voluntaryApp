import React from 'react';
import { FlatList,View,Text } from 'react-native';
import Imagem from "../../../../componentes/Imagem";
import Texto from '../../../../componentes/texto';
import Botao from '../../../../componentes/Botao';
import Jose from "../../../../../assets/exemplos/Jose.png";
import Maria from "../../../../../assets/exemplos/Maria.png";


const data = [
    {
    id: '1',
    nomeDestaque:'Cleyton Silva Nascimento',
    perfilDesaque: Jose
    },
    {
      id: '2',
      nomeDestaque:'Maria Eduarda Ferreira',
      perfilDesaque: Maria
    },
    
  ];

  const Destaques = () => {

    const renderItem = ({ item }) => (
    <View style={{flex:1,marginEnd:15,marginTop:15}}>
      <Botao tipo={4} texto={
        <View style={{flex:1,textAlign:'center',justifyContent:'center',alignSelf:'center',alignContent:'center'}}>
          <Imagem imagem={item.perfilDesaque} tipo={'perfilDestaque'}/>
          <Text style={{textAlign:'center'}}>{item.nomeDestaque}</Text>
        </View>} 

        acao={() => { }}
         />
    </View>   
  );
 
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal ={true}
      />
    );
  }
  
  export default Destaques;

  
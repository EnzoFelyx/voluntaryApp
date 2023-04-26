import React from 'react';
import { FlatList,View,Text } from 'react-native';
import Imagem from "../../../../componentes/Imagem";
import Texto from '../../../../componentes/texto';
import Botao from '../../../../componentes/Botao';
import MaosUnidas from "../../../../../assets/MaosUnidas.png"
import perfilMaosUnidas from "../../../../../assets/perfilMaosUnidas.png";
import dedosEntrelacados from "../../../../../assets/dedosEntrelacados.png";
import perfilDedosEntrelacados from "../../../../../assets/perfilDedosEntrelacados.png";


const data = [
    {
    id: '1',
    imageUrl: MaosUnidas,
    criador:'ONG Mãos Unidas',
    perfilOng: perfilMaosUnidas
    },
    {
      id: '2',
      imageUrl: dedosEntrelacados,
      criador:'ONG Dedos entrelaçados',
      perfilOng: perfilDedosEntrelacados
    },
    
    
  ];

  const Ongs = () => {

    const renderItem = ({ item }) => (
    <View style={{flex:1,marginEnd:10,marginBottom:20}}>
      <Botao tipo={3} texto={
        <View>
          <Imagem imagem={item.imageUrl} tipo={ 'imagemEvento'} />

        </View>} 

        acao={() => { }}
         />
          <View style={{
                    flexDirection: "row",marginTop:10,}}>
          <Imagem imagem={item.perfilOng} tipo={'criadorEvento'}/>
          <Texto style={{margin: 4}}>{item.criador}</Texto>
        </View>



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
  
  export default Ongs;

  
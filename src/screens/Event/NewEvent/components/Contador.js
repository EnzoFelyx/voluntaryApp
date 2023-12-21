import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Texto from '../../../../componentes/texto';

const Contador = ({entrada}) => {
  const [valor, setValor] = useState(0);

  const aumentarValor = () => {
    setValor(valor + 1);
  }

  const diminuirValor = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  return (
    
    <View style={{marginTop:20,flexDirection: 'row', alignItems: 'center'}}>

        <Texto>Participantes : </Texto>
        
    
    
    <View style={{backgroundColor:'#E4F4CD',width: 50,height: 50,alignSelf: 'center',borderRadius:16,flexDirection:'row'}} >
        
      <TextInput
        keyboardType="numeric"
        value={valor.toString()}
        onChangeText={setValor}
        style={{width: 50, textAlign: 'center', fontSize: 20}}
      />
      </View>

      <View style ={{marginLeft:10}}>
      <TouchableOpacity onPress={aumentarValor}>
        <Text style={{fontSize: 20}}>+</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={diminuirValor}>
        <Text style={{fontSize: 20}}>-</Text>
      </TouchableOpacity>

      
      </View>
    </View>
  );
}

export default Contador;
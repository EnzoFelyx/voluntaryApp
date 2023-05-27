import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Contador from './Contador';


const CaixaSelecao = ({ label1, label2 }) => {
  const [isAmbiente1, setAmbiente1] = useState(false);
  const [isAmbiente2, setAmbiente2] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const handleAmbiente1Press = () => {
    setAmbiente1(true);
    setAmbiente2(false);
    setOpcaoSelecionada('publico');
  };

  const handleAmbiente2Press = () => {
    setAmbiente2(true);
    setAmbiente1(false);
    setOpcaoSelecionada('privado');
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:16,marginBottom:10 }}>
        <TouchableOpacity onPress={handleAmbiente1Press}>
          {isAmbiente1 ? (
            <MaterialIcons name="check-box" size={24} color="green" />
          ) : (
            <MaterialIcons name="check-box-outline-blank" size={24} color="green" />
          )}
        </TouchableOpacity>
        <Text style={{ marginLeft: 8 }}>{label1}</Text>

        <TouchableOpacity onPress={handleAmbiente2Press}>
          {isAmbiente2 ? (
            <MaterialIcons name="check-box" size={24} color="green" />
          ) : (
            <MaterialIcons name="check-box-outline-blank" size={24} color="green" />
          )}
        </TouchableOpacity>
        <Text style={{ marginLeft: 8 }}>{label2}</Text>
      </View>

      {opcaoSelecionada === 'privado' && <Contador /> }
    </View>
  );
};

export default CaixaSelecao;

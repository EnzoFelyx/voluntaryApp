import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Texto from './texto';

export default function Input({ legenda = null, entrada, senha = false, tipo, valor, onChangeText, onPressIn = null, focado = null, keyType = null, leght = null, editable = true }) {

  const caixaInputStyle = (tipo) => {

    switch (tipo) {

      case 1:
      /*  return estilos.caixaInputGrande; */

      case 2:
        return estilos.caixaInputPequena;

      /*  case 3:
         return estilos.caixaComentar; */

      default:
        return estilos.caixaInputGrande;
    }
  }

  const estiloCaixa = caixaInputStyle(tipo);

  if (legenda == null) {
    return <TextInput
      maxLength={leght}
      keyboardType={keyType}
      onPressIn={onPressIn}
      onFocus={focado}
      secureTextEntry={senha}
      style={estiloCaixa}
      placeholder={entrada}
      value={valor}
      onChangeText={onChangeText}
      autoCapitalize='none'
      editable={editable}
    />
  }

  else {
    return <View style={estilos.insertLegenda}>
      <Texto>{legenda}</Texto>
      <TextInput secureTextEntry={senha} style={estiloCaixa} placeholder={entrada} value={valor} onChangeText={onChangeText} />
    </View>
  }
}

const estilos = StyleSheet.create({

  caixaInputPequena: {
    marginTop: 16,
    paddingVertical: 15,
    backgroundColor: "#E4F4CD",
    marginVertical: 18,
    borderRadius: 15,
    textAlign: 'center',
    flex: 1,
    marginEnd: 16,
  },

  /*  caixaComentar: {
     marginTop: 25,
     paddingBottom: 56,
     paddingHorizontal: 16,
     backgroundColor: "#E4F4CD",
     borderRadius: 15,
     marginBottom: 16
   },
  */
  caixaInputGrande: {
    paddingVertical: 14,
    marginVertical: 18,
    backgroundColor: "#E4F4CD",
    borderRadius: 15,
    paddingLeft: 16,
  },

  insertLegenda: {
    marginTop: 16,
    marginBottom: 16,
  },

});
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import Texto from './texto';

export default function Input({ legenda = null, entrada, senha = false, tipo}) {

  const caixaInputStyle = (tipo) => {

    switch (tipo) {

      case 1:
        return estilos.caixaInputGrande;

      case 2:
        return estilos.caixaInputPequena;

      case 3:
        return estilos.caixaComentar;

      default:
        return estilos.caixaInputGrande;
    }
  }

  const estiloCaixa = caixaInputStyle(tipo);

  if (legenda == null) {
    return <TextInput secureTextEntry={senha} style={estiloCaixa} placeholder={entrada} />

  }
  else {
    return <View style={estilos.insertLegenda}>
      <Texto>{legenda}</Texto>
      <TextInput secureTextEntry={senha} style={estiloCaixa} placeholder={entrada} />
    </View>
  }
}

const estilos = StyleSheet.create({
  caixaInputPequena: {
    height: 43,
    width: 156,
    marginTop: 16,
    fontSize: 12,
    paddingVertical: 15,
    backgroundColor: "#E4F4CD",
    borderRadius: 15,
    paddingLeft: 16,
  },

  caixaComentar: {

    marginTop: 24,
    paddingTop: 8,
    paddingBottom: 56,
    paddingHorizontal: 16,
    backgroundColor: "#E4F4CD",
    borderRadius: 15,

  },

  caixaInputGrande: {
    height: 43,
    marginTop: 16,
    fontSize: 12,
    paddingVertical: 15,
    backgroundColor: "#E4F4CD",
    borderRadius: 15,
    paddingLeft: 16,
    marginBottom: 16,
  },

  insertLegenda: {
    marginTop: 16,
    marginBottom: 16,
  },

});
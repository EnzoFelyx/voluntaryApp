import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({ entrada, senha = false, tipo }) {
  
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

  return <TextInput secureTextEntry={senha} style={estiloCaixa} placeholder={entrada}/>
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
    paddingLeft: 16
  },

});
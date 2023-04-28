import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({ entrada, senha = false, tipo  }) {
  const caixaInputStyle = (tipo) => {
    switch (tipo) {
      case 1:
        return estilos.caixaInputGrande;
      case 2:
        return estilos.caixaInputPequena;
      case 3:
        return estilos.caixaInputcomentario;
      default:
        return estilos.caixaInputGrande; // caso nenhum tipo seja fornecido, usará o estilo padrão
    }
  }

  const estiloCaixa = caixaInputStyle(tipo);

  return (
    <TextInput
      secureTextEntry={senha}
      style={estiloCaixa}
      placeholder={entrada}
    />
  );
}

const estilos = StyleSheet.create({
  caixaInputPequena: {
    height: 43,
    width: 156,
    marginTop: 16,
    fontSize: 12,
    paddingVertical: 15,
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 15,
    paddingLeft: 16,

  },
  caixaInputGrande: {
    height: 43,
    marginTop: 16,
    fontSize: 12,
    paddingVertical: 15,
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 15,
    paddingLeft: 16
  },
  caixaInputcomentario: {
    height: 80,
    marginTop: 16,
    fontSize: 12,
    paddingVertical: 15,
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 15,
    paddingLeft: 16
  },
});
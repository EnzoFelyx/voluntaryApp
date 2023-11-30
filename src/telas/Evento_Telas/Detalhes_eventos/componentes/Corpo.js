import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Botao from "../../../../componentes/Botao";
import Titulo from '../../../../componentes/Titulo';
import Texto from "../../../../componentes/texto";
import useTopo from '../../../../hooks/useTopo';
import { criarAmrEvento } from '../../../../servicos/requisicoes/eventos';

export default function Corpo({ descricao, participantes, idEvento }) {

  const dadosDoUsuario = useTopo();
  const navigation = useNavigation()

  async function criarAmr() {

    const resultado = await criarAmrEvento(
      dadosDoUsuario.id,
      idEvento
    );
    navigation.goBack()
  };

  return <>
    <Titulo entrada={'Descrição'} tipo={"Titulo"} />
    <View style={{ marginTop: 12, }}>
      <Texto>{descricao}</Texto>
    </View>
    <View style={estilos.participantes}>
      <Texto>{'Participantes:'}</Texto>
      <Texto>{participantes}</Texto>
    </View>
    <Botao texto={'Inscrever-se'}
      tipo={2}
      acao={criarAmr} />
  </>
}


const estilos = StyleSheet.create({

  participantes: {
    marginTop: 16,
    flexDirection: "row",
    marginLeft: "auto",
    marginBottom: 16,
  },

})
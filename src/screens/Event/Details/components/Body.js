import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../../../components/Button";
import Title from '../../../../components/Title';
import Texto from "../../../../components/texto";
import useTopo from '../../../../hooks/useTopo';
import { criarAmrEvento } from '../../../../services/requests/eventos';

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
    <Title entrada={'Descrição'} tipo={"Titulo"} />
    <View style={{ marginTop: 12, }}>
      <Texto>{descricao}</Texto>
    </View>
    <View style={estilos.participantes}>
      <Texto>{'Participantes:'}</Texto>
      <Texto>{participantes}</Texto>
    </View>
    <Button texto={'Inscrever-se'}
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
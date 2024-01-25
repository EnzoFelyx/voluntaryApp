import React from "react";
import { StyleSheet, View } from "react-native";
import { details } from '../../../../../config/text.json';
import Title from '../../../../components/Title';
import Texto from "../../../../components/texto";
import Subscribe from "./Subscribe";

export default function Corpo({ descricao, participantes, idEvento }) {

  const title = details.title;

  return <>
    <Title entrada={title} tipo={"Titulo"} />
    <Texto style={{ marginTop: 12 }}>{descricao}</Texto>
    <View style={estilos.participantes}>
      <Texto>{'Participantes:'}</Texto>
      <Texto>{participantes}</Texto>
    </View>
    <Subscribe idEvento={idEvento} />
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
import React from "react";

import { details } from '../../../../../config/text.json';
import Title from '../../../../components/Title';
import Texto from "../../../../components/texto";
import Subscribe from "./Subscribe";
import { View } from "react-native";

export default function Corpo({ descricao, idEvento }) {

  const title = details.title;

  return <>
    <Title entrada={title} tipo={"Titulo"} />
    <Texto style={{ marginTop: 12 }}>{descricao}</Texto>
    <View style={{ marginTop: 40 }}>
      <Subscribe idEvento={idEvento} />
    </View>
  </>
}
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { login } from "../../../../../config/text.json";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Title from "../../../../components/Title";
import { Login } from "../../../../services/requests/usuario";

export default function Conta() {

  const navigation = useNavigation();
  const { titulo, emailLeg, senhaLeg, entrar } = login.conta;
  const { error, logado } = login.alertas;

  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");

  async function logar() {
    const resultado = await Login(email, password);
    if (resultado) {
      await AsyncStorage.setItem("id", String(resultado.id))
      navigation.replace(logado);

    } else {
      Alert.alert(error);
    }
  }

  return <>
    <Title entrada={titulo} tipo={"Titulo"} />
    <Input entrada={emailLeg} valor={email} onChangeText={setEmail} />
    <Input entrada={senhaLeg} senha={true} valor={password} onChangeText={setSenha} />
    <Button texto={entrar} tipo={1} acao={logar} />

  </>
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { login } from "../../../../../config/text.json";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Title from "../../../../components/Title";
import { Login } from "../../../../services/requests/usuario";

export default function Account() {

  const navigation = useNavigation();

  const { title, emailLeg, passLeg, join } = login.account;
  const { error, logged } = login.warnings;

  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");

  async function logar() {
    const resultado = await Login(email, password);
    if (resultado) {
      await AsyncStorage.setItem("id", String(resultado.id))
      navigation.replace(logged);

    } else {
      Alert.alert(error);
    }
  }

  return <>
    <Title entrada={title} tipo={"Titulo"} />
    <Input entrada={emailLeg} valor={email} onChangeText={setEmail} />
    <Input entrada={passLeg} senha={true} valor={password} onChangeText={setSenha} />
    <Button texto={join} tipo={1} acao={logar} />

  </>
}

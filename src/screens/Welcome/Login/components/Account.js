import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import { login } from "../../../../../config/text.json";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Title from "../../../../components/Title";
import { Login } from "../../../../services/requests/usuario";
import CryptoJS from "crypto-js";

const height = Dimensions.get('window').height;


export default function Account() {


  const navigation = useNavigation();

  const { title, emailLeg, passLeg, join } = login.account;
  const { error, logged } = login.warnings;

  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");

  async function logar() {
    if (email && password) {
      const senha = CryptoJS.MD5(password).toString();
      const resultado = await Login(email, senha);
      if (resultado) {
        await AsyncStorage.setItem("id", String(resultado.id))
        navigation.replace(logged);
      } else {
        Alert.alert(error);
      }
    }
  }

  return (
    <>
      <Title entrada={title} tipo={"Titulo"} />
      <Input entrada={emailLeg} valor={email} onChangeText={setEmail} />
      <Input entrada={passLeg} senha={true} valor={password} onChangeText={setSenha} />
      <View style={{ marginTop: height * 0.04}}>
        <Button texto={join} tipo={1} acao={logar} disabled={!email || !password} />
      </View>
    </>
  );
}


import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importe o AsyncStorage
import Input from "../../../../componentes/Input";
import Titulo from "../../../../componentes/Titulo";
import Botao from "../../../../componentes/Botao";
import { Login } from "../../../../servicos/requisicoes/usuario";
import { useNavigation } from "@react-navigation/native";

export default function Conta({ title, nome, senha, botaoEntrar }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");

  async function logar() {
    const resultado = await Login(email, password);
    if (resultado) {
      await AsyncStorage.setItem("id", String(resultado.id)) 
      navigation.replace('Logado');
    
    } else {
      Alert.alert('Usuário inválido');
    }
  }

  return (
    <SafeAreaView>
      <Titulo entrada={title} tipo={"Titulo"} />
      <Input entrada={nome} valor={email} onChangeText={setEmail} />
      <Input entrada={senha} senha={true} valor={password} onChangeText={setSenha} />
      <Botao texto={botaoEntrar} tipo={1} acao={logar} />
    </SafeAreaView>
  );
}

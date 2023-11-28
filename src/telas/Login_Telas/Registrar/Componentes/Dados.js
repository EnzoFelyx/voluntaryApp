import React, { useState } from "react";
import { View,Alert,TouchableOpacity } from "react-native";
import Input from '../../../../componentes/Input';
import Botao from '../../../../componentes/Botao';
import { criarConta } from "../../../../servicos/requisicoes/cadastrar";
import { useNavigation } from "@react-navigation/native";
import Default from '../../../../../assets/perfil/FotoDefault.png';
import Imagem from '../../../../componentes/Imagem';

export default function Dados({botao, nome, email, cpf_cnpj, senha, imagem}) {
    const [dados, setDados] = useState ({}); 
    const navigation = useNavigation()


    function atualizarDados(id,valor)
    {   
        setDados({...dados,[id]:valor})

    }

    async function criar() {
          const resultado = await criarConta(
            dados[imagem],
            dados[nome],
            dados[email],
            dados[cpf_cnpj],
            dados[senha]
          );
      
          if (resultado == 'Sucesso')
            {
                Alert.alert("Sucesso. Sua conta foi criada !")
                navigation.goBack()
        }
        else{
            Alert.alert("Erro ao criar conta")
        }
        {/*falar com os meninons sobre isnerir i'magem*/}
    };

    return <>
    <TouchableOpacity>
            <Imagem imagem={Default} tipo={"RegistrarFoto"} /> 
        </TouchableOpacity>
    <View style={{marginBottom: 16,}}>
    <Input entrada={nome} valor={dados[nome]} onChangeText={(valor) => atualizarDados(nome, valor)} />
    <Input entrada={email} valor={dados[email]} onChangeText={(valor) => atualizarDados(email, valor)} />
    <Input entrada={cpf_cnpj} valor={dados[cpf_cnpj]} onChangeText={(valor) => atualizarDados(cpf_cnpj, valor)} />
    <Input entrada={senha} valor={dados[senha]} senha={true} onChangeText={(valor) => atualizarDados(senha, valor)} />
    {/*<Input entrada={confirma} valor={dados[confirma]} senha={true} onChangeText={(valor) => atualizarDados(confirma, valor)} />*/}
    <Botao  texto={botao} tipo={1} acao={criar}/>
    </View>
    </>
}





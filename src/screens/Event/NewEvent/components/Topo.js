import React, { useState, useEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from "react-native";
import Texto from "../../../../components/texto";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import CaixaSelecao from "./CaixaSelecao";
import { MaterialIcons } from '@expo/vector-icons';
import Icon from "../../../../components/Icon";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { criarEvento } from '../../../../services/requests/eventos'
import { pegarDadosUsuario } from '../../../../services/requests/usuario'
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import { newEvent } from "../../../../../config/text.json";

export default function Topo({ titulos, interacoes }) {

  const { name, nameLeg, date, dateLeg, periodLeg, start, timeLeg, ends } = newEvent.page1

  const [nomeEvento, setnomeEvento] = useState('');
  const [dataEvento, setdataEvento] = useState('');
  const [horaEvento, sethoraEvento] = useState('');
  const [localEvento, setlocalEvento] = useState('');
  const [descricao, setdescricao] = useState('');
  const [imagemEvento, setImagemSelecionada] = useState(null);
  const [permissaoGaleria, setPermissaoGaleria] = useState(null);
  const [dadosDoUsuario, setDadosDoUsuario] = useState({});
  const navigation = useNavigation()


  useEffect(() => {
    async function buscarDadosDoUsuario() {
      const id = await AsyncStorage.getItem('id');

      if (!id) {
        return null;
      }

      const resultado = await pegarDadosUsuario(id);
      if (resultado) {
        setDadosDoUsuario(resultado);

      }
    }
    buscarDadosDoUsuario();

  }, []);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissaoGaleria(galleryStatus.status === 'granted');

    })();

  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });


    if (!result.cencaled) {
      setImagemSelecionada(result.uri) //mudei de uri para assests pq está dizendo que é depreciado.
    }
  };

  if (permissaoGaleria === false) {
    console.log('Sem acesso a Galeria.')
  }


  async function criar() {

    const resultado = await criarEvento(

      dadosDoUsuario.id,
      dadosDoUsuario.nome,
      dadosDoUsuario.perfil,
      nomeEvento,
      dataEvento,
      localEvento,
      horaEvento,
      descricao,
      imagemEvento
    );

    Alert.alert("Sucesso. Evento criado !")
    navigation.goBack()
  };

  return (
    <>
      <View>

        <Texto>{name}</Texto>
        <Input
          entrada={nameLeg}
          tipo={'1'}
          valor={nomeEvento}
          onChangeText={setnomeEvento}
        />

        <Texto>{date}</Texto>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Input
            entrada={dateLeg}
            tipo={2}
            valor={localEvento}
            onChangeText={setlocalEvento}
          />

          <Input
            entrada={periodLeg}
            tipo={2}
            valor={localEvento}
            onChangeText={setlocalEvento}
          />
        </View>


        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{flex: 1}}>
            <Texto>{start}</Texto>
            <Input
              entrada={timeLeg}
              tipo={2}
              valor={localEvento}
              onChangeText={setlocalEvento}
            />
          </View>
          <View style={{flex: 1}}>
            <Texto>{ends}</Texto>
            <Input
              entrada={timeLeg}
              tipo={2}
              valor={localEvento}
              onChangeText={setlocalEvento}
            />
          </View>
        </View>




        {/* <View>
          <View style={estilos.viewInputPequena}>

            <Texto>{titulos.data}</Texto>

            <Texto style={{ marginHorizontal: 60 }}>{titulos.comeca}</Texto>
          </View>
          <View style={estilos.viewInputPequena}>
        

            <Input style={{ marginHorizontal: 10 }}
              entrada="dd/mm/aa"
              tipo={2}
              valor={dataEvento}
              onChangeText={setdataEvento}
            />

            
            <Input style={{ marginHorizontal: 10 }}
              entrada="Horário"
              tipo={2}
              valor={horaEvento}
              onChangeText={sethoraEvento}
            />
          </View>

        </View> */}

        {/* <View style={estilos.viewInput}>
          <Texto>{titulos.fotoCapa}</Texto>
          <View style ={estilos.viewInput}/> 
          <Button tipo={2} texto={
            <View style={estilos.Capa}>
              <Icon icone={"plus-circle-outline"} tipo={"adicionarCapa"} tamanho={36} />
            </View>
            
          } acao={pickImage}/>
        </View> */}
        {/* 
        <View style={estilos.viewInput}>
          <Texto>{titulos.descricao}</Texto>
          <Input style={{ marginHorizontal: 10 }} 
          entrada="Digite aqui ..." 
          tipo={3} 
          valor={descricao}
          onChangeText={setdescricao}
          />
        </View>

        <View style={estilos.viewInput}>
          <Texto>{titulos.local}</Texto>
          <CaixaSelecao label1={<Texto>Publico</Texto>} label2={<Texto>Privado</Texto>} />
        </View>

        <View style={estilos.viewFotos}>
          <Texto>{titulos.fotos}</Texto>
          
        </View>
          
        <TouchableOpacity style={{paddingTop:10,alignItems:"center",paddingBottom:20}} >
          <MaterialIcons name="cloud-upload" size={36} color="green" />
        </TouchableOpacity>

        <View style={estilos.posicao}>
        <Button tipo={2} texto={'Criar Evento'}
        acao={criar} />
        </View>   */}

      </View>
    </>
  );
}

const estilos = StyleSheet.create({

  viewInput: {
    marginTop: 10,
    marginEnd: 10,
    flexDirection: 'column',
  },

  viewInputPequena: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 10


  },
  viewFotos: {
    marginTop: 10,
    marginEnd: 20,
    flex: 1
  },

  Capa: {
    paddingTop: 70,
    height: 180,
    width: 300,
    backgroundColor: "#E4F4CD",
    borderRadius: 15,
  },

  posicao: {
    marginTop: 30,
    bottom: 20,
    alignSelf: 'center',
    height: 55,
    width: 188,
  },

})

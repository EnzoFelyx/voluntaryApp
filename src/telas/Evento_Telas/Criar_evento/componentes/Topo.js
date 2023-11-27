import React, {useState,useEffect} from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from "react-native";
import Texto from "../../../../componentes/texto";
import Input from "../../../../componentes/Input";
import Botao from "../../../../componentes/Botao";
import CaixaSelecao from "./CaixaSelecao";
import { MaterialIcons } from '@expo/vector-icons';
import Icone from "../../../../componentes/Icone";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {criarEvento} from '../../../../servicos/requisicoes/eventos'
import { pegarDadosUsuario } from '../../../../servicos/requisicoes/usuario'
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";



export default function Topo({ titulos, interacoes }) {
  const [nomeEvento, setnomeEvento] = useState('');
  const [dataEvento, setdataEvento] = useState('');
  const [horaEvento, sethoraEvento] = useState('');
  const [localEvento, setlocalEvento] = useState('');
  const [descricao, setdescricao] = useState('');
  const [imagemEvento, setImagemSelecionada] = useState(null);
  const [permissaoGaleria,setPermissaoGaleria] = useState(null);
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
          setPermissaoGaleria(galleryStatus.status ==='granted');

        })();

    }, []);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect: [4,3],
        quality:1
      });


      if (!result.cencaled)
      {
        setImagemSelecionada(result.assets) //mudei de uri para assests pq está dizendo que é depreciado.
      }
    };

    if (permissaoGaleria === false)
    {
      console.log('Sem acesso a Galeria.')
    }


  async function criar(){

      const resultado = await criarEvento(

          dadosDoUsuario.id,
          dadosDoUsuario.nome,
          dadosDoUsuario.perfil,
          nomeEvento,
          dataEvento,
          horaEvento,
          localEvento,
          descricao,
          imagemEvento
      );

      Alert.alert("Sucesso. Evento criado !")
      navigation.goBack()
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>

      <View style={estilos.container}>
        <View style={estilos.viewInput}>
          <Texto>{titulos.evento}</Texto>
          <Input
           entrada="Nome do evento" 
           tipo={'1'}
           valor={nomeEvento}
           onChangeText={setnomeEvento}
            />
        </View>

        <View style={estilos.viewInput}>
          <View style={estilos.viewInputPequena}>
            {/*data*/}
            <Texto>{titulos.data}</Texto>
            {/*Hora*/}
            <Texto style={{ marginHorizontal: 60 }}>{titulos.comeca}</Texto>
          </View>
          <View style={estilos.viewInputPequena}>
            {/*data*/}

            <Input style={{ marginHorizontal: 10 }} 
            entrada="dd/mm/aa" 
            tipo={2} 
            valor={dataEvento}
            onChangeText={setdataEvento}
            />

            {/*Hora*/}
            <Input style={{ marginHorizontal: 10 }} 
            entrada="Horário"
            tipo={2} 
            valor={horaEvento}
            onChangeText={sethoraEvento}
             />
          </View>
        </View>

        <View style={estilos.viewInput}>
          <Texto>{titulos.fotoCapa}</Texto>
          <View style ={estilos.viewInput}/> 
          <Botao tipo={7} texto={
            <View style={estilos.Capa}>
              <Icone icone={"plus-circle-outline"} tipo={"adicionarCapa"} tamanho={36} />
            </View>
            
          } acao={pickImage}/>
        </View>

        <View style={estilos.viewInput}>
          <Texto>{titulos.descricao}</Texto>
          <Input style={{ marginHorizontal: 10 }} 
          entrada="Digite aqui ..." 
          tipo={3} 
          valor={descricao}
          onChangeText={setdescricao}
          />
        </View>
{/*
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
*/}
        <View style={estilos.posicao}>
        <Botao tipo={2} texto={'Criar Evento'}
        acao={criar} />
        </View>            
  


      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  topo: {

  },
  container:
  {
    flex: 1
  },
  viewInput: {
    marginTop: 10,
    marginEnd: 10,
    flexDirection: 'column',
  },

  viewInputPequena: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom:10
    

  },
  viewFotos: {
    marginTop: 10,
    marginEnd: 20,
    flex: 1
  },

  Capa: {
    paddingTop:70,
    height: 180,
    width: 300,
    backgroundColor: "#E4F4CD",
    borderRadius: 15,
  },

  posicao: {
    marginTop:30,
    bottom: 20,
    alignSelf: 'center',
    height:55,
    width: 188,
  },

})

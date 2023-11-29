import React,{useEffect,useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";
import { pegarDadosUsuario } from '../../../../servicos/requisicoes/usuario';
import { criarAmrEvento } from '../../../../servicos/requisicoes/eventos';
import { useNavigation } from "@react-navigation/native";


export default function Corpo({ descricao, participantes,idEvento }) {

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

    async function criarAmr(){

        const resultado = await criarAmrEvento(
  
            dadosDoUsuario.id,
            idEvento
           
        );
    
        navigation.goBack()
    
    };



    return <>

        <Titulo entrada={'Descrição'} tipo={"Titulo"}/>

        <View style={{ marginTop: 12, }}>
            <Texto>{descricao}</Texto>
        </View>
        
        <View style={estilos.participantes}>
            <Texto>{'Participantes:'}</Texto>
            <Texto>{participantes}</Texto>

        </View>

        <Botao texto={'Inscrever-se'} 
        tipo={2} 
        acao={criarAmr}/>
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
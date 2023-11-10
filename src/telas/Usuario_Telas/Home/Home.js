import { React,useState,useEffect } from 'react';
import { ScrollView } from 'react-native';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';
import { SafeAreaView } from 'react-native-safe-area-context';
import {pegarDadosUsuario} from '../../../servicos/requisicoes/usuario'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ topo, interacoes }) {

    const[dadosDoUsuario, setDadosDoUsuario] = useState({});


    useEffect(() => {
    async function pegarUser() {
      const id = await AsyncStorage.getItem('id');

  
        if (!id) {
          return null;
        }
        
        const resultadouser = await pegarDadosUsuario(id);
        if (resultadouser) {
          setDadosDoUsuario(resultadouser);

        }
      }
      pegarUser();
    }, []);


    return (
        <SafeAreaView style={{flex:1}}>
            <Background back={"fundo"}>
                <Cabecalho Foto={{uri:dadosDoUsuario.perfil}} titulo={topo.titulo}/>
                <Background back={"quadrado2"}> 
                    <ScrollView style={{ flex: 1 }}>
                        <Lista {...interacoes} />
                    </ScrollView>
                </Background>
            </Background>
        </SafeAreaView>
    )
}
import { React,useState,useEffect } from 'react';
import Background from '../../../componentes/Background';
import Busca from './componentes/Busca';
import Eventos from './componentes/Eventos';
import PerfilFoto from '../../../../assets/exemplos/PerfilFoto.png';
import Cabecalho from '../../../componentes/Cabecalho';
import { SafeAreaView } from 'react-native-safe-area-context';
import {pegarDadosUsuario} from '../../../servicos/requisicoes/usuario'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Pesquisar_eventos({ topo, eventos }) {

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
        <SafeAreaView style = {{height: "100%" }}>
            <Background back={"fundo"}>
                <Cabecalho Foto={{uri:dadosDoUsuario.perfil}} titulo={topo.titulo}/>
                <Background back={"quadrado2"}>
                    <Busca {...topo} {...eventos} />
                </Background>
            </Background>
        </SafeAreaView>
    )
}
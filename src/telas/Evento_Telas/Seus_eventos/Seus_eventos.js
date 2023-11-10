import React from 'react';
import { useState,useEffect } from 'react';
import { View,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../../componentes/Background';
import Cabecalho from '../../../componentes/Cabecalho';
import Lista from './componentes/Lista';
import { pegarEventos } from '../../../servicos/requisicoes/eventos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {pegarDadosUsuario} from '../../../servicos/requisicoes/usuario'

export default function Seus_eventos({topo, interacoes}) {

        const[dadosEventos, setDadosEventos] = useState({});
        const[dadosDoUsuario, setDadosDoUsuario] = useState({});

      
        useEffect(() => {
          async function buscarDadosEventos() {
            const id = await AsyncStorage.getItem('id');
      
            if (!id) {
              return null;
            }
            
            const resultado = await pegarEventos(id);
            if (resultado) {
                setDadosEventos(resultado);
            }


          }
          buscarDadosEventos();
        }, []);
        
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


    return (<SafeAreaView style = {{flex:1}}>
            <StatusBar/>
            <Background back={"fundo"}>
                <Cabecalho Foto={{uri:dadosDoUsuario.perfil}} titulo={topo.titulo} icone={false} />
                <Background back={"quadrado2"}>
                    <View style={{ flex: 1, }}>
                    <Lista {...interacoes} dadosEventos={dadosEventos} />
                    </View>
                </Background>
            </Background>
        </SafeAreaView>
    )
}
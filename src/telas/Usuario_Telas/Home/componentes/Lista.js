import React from "react";
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Titulo from "../../../../componentes/Titulo";
import Texto from "../../../../componentes/texto";
import Destaques from "./Destaques";
import Eventos from './Eventos';
import Ongs from "./Ongs";
import Linha from "../../../../componentes/Linha";
import { pegarTodosEventos } from '../../../../servicos/requisicoes/eventos';
import { pegarDadosTodosUsuarios } from "../../../../servicos/requisicoes/usuario";
import { pegarDadosTodasOngs } from "../../../../servicos/requisicoes/ong";

export default function Lista({ subtitulo, frases }) {

    const[dadosEventos, setDadosEventos] = useState({});
    const[dadosDoUsuario, setDadosDoUsuario] = useState({});
    const[dadosOng, setDadosOng] = useState({});




    useEffect(() => {
        async function buscarDadosEventos() {
          
          const resultado = await pegarTodosEventos();
          if (resultado) {
              setDadosEventos(resultado);
          }
  
  
        }
        buscarDadosEventos();

      }, []);

      useEffect(() => {
        async function buscarDadosUsuarios() {
          
          const resultadoUsers = await pegarDadosTodosUsuarios();
          if (resultadoUsers) {
            setDadosDoUsuario(resultadoUsers);
          }
  
        }
        buscarDadosUsuarios();
      }, []);

      useEffect(() => {
        async function buscarDadosOngs() {
          
          const resultadoOngs = await pegarDadosTodasOngs();
          if (resultadoOngs) {
            setDadosOng(resultadoOngs);
          }
  
        }
        buscarDadosOngs();
      }, []);

    return (
        <View style={{ flex: 1 }}>
            <Titulo entrada={subtitulo.subtitle} tipo={"subtitle"} />
            <Texto>{frases.mensagem}</Texto>

            <View style={{ flex: 1, marginTop: 20 }}>
                <Text style={estilos.titulosFlatLists}>Eventos:</Text>
                <View style={{ flexDirection: "row" }}>
                    <Eventos dadosEventos={dadosEventos} />
                </View>
            </View>

            <View style={estilos.viewDestaque}>
                <Text style={estilos.titulosFlatLists}>Destaques do mês:</Text>
                <View style={estilos.viewBotaoDestaque}>
                    <Destaques dadosDoUsuario={dadosDoUsuario}/>
                </View>
            </View>


            <View style={estilos.viewOngsDestaque}>
                <Text style={estilos.titulosFlatLists}>ONGS:</Text>
                <View style={estilos.viewBotaoOngsDestaque}>
                    <Ongs dadosOng={dadosOng} />
                </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    viewDestaque: {
        flex: 1,
        width: 350,
        height: 245,
        marginTop: 40,


    },
    viewBotaoDestaque: {
        alignItems: 'center',
        flexDirection: "row"

    },

    viewOngsDestaque: {
        //backgroundColor: '#E4F4CD',
        alignSelf: 'flex-end',
        marginTop: 40

    },
    viewBotaoOngsDestaque: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: "row"


    },
    titulosFlatLists:
    {
        fontSize: 16,
        lineHeight: 42,
        fontWeight: "bold",
    }

})


import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from "react-native";
import Texto from "../../../../componentes/texto";
import Input from "../../../../componentes/Input";
import Botao from "../../../../componentes/Botao";
import CaixaSelecao from "./CaixaSelecao";
import { MaterialIcons } from '@expo/vector-icons';
import Icone from "../../../../componentes/Icone";


export default function Topo({ titulos, interacoes }) {
  return (

    <SafeAreaView style={{ flex: 1 }}>

      <View style={estilos.container}>
        <View style={estilos.viewInput}>
          <Texto>{titulos.evento}</Texto>
          <Input entrada="Nome do evento" tipo={'1'} />
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
            <Input style={{ marginHorizontal: 10 }} entrada="dd/mm/aa" tipo={2} />
            {/*Hora*/}
            <Input style={{ marginHorizontal: 10 }} entrada="Horário" tipo={2} />
          </View>
        </View>

        <View style={estilos.viewInput}>
          <Texto>{titulos.fotoCapa}</Texto>
          <View style ={estilos.viewInput}/> 
          <Botao tipo={7} texto={
            <View style={estilos.Capa}>
              <Icone icone={"plus-circle-outline"} tipo={"adicionarCapa"} tamanho={36} />
            </View>
          } />
        </View>

        <View style={estilos.viewInput}>
          <Texto>{titulos.descricao}</Texto>
          <Input style={{ marginHorizontal: 10 }} entrada="Digite aqui ..." tipo={3} />
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
  }

})

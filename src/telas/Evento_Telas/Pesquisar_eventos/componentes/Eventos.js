import React from "react";
import { View, StyleSheet,FlatList } from "react-native";
import Titulo from '../../../../componentes/Titulo';
import Botao from '../../../../componentes/Botao';
import Texto from "../../../../componentes/texto";
import Imagem from "../../../../componentes/Imagem";
import pessoas from "../../../../../assets/pessoas.png";

const dadosEventos = [
    
      {
        id: 1,
        nome: "Coleta de lixo na Praia",
        dataEvento: "29/05/2023",
        localEvento: "Santos - SP",
        contPessoas: 15,
      },

      {
        id: 2,
        nome: "Arrecadação de casacos",
        dataEvento: "20/04/2023",
        localEvento: "Santos - SP",
        contPessoas: 30,
      },

  
      {
        id: 3,
        nome: "Visitar casa de repouso",
        dataEvento: "30/04/2023",
        localEvento: "Praia Grande - SP",
        contPessoas: 4,
      },
  ];
  
  export default function Eventos({ subtitulo }) {
    return (
        
      <View>
        <Titulo entrada={subtitulo.subtitle} />
        <FlatList
          data={dadosEventos} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Botao
                tipo={3}
                texto={
                  <View style={{ flexDirection: "row" }}>
                    <Texto style={estilos.nome}>{item.nome}</Texto>
                  </View>
                }
                acao={() => {}}
              />
              <View style={{ flexDirection: "row" }}>
                <Texto style={estilos.local}>{item.localEvento}</Texto>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "auto",
                    marginRight: 8,
                  }}
                >
                  <Imagem imagem={pessoas} tipo={"icone"} />
                  <Texto style={estilos.contador}>{item.contPessoas}</Texto>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }

const estilos = StyleSheet.create({
    nome: {
        fontWeight: "bold",
        fontSize: 16,
    },
    data: {
        marginLeft: "auto",
        marginRight: 8,
        fontSize: 14,
        textAlign: 'right',
    },

    local: {
        textAlign: 'right',
        marginHorizontal: 8,
    },
    contador: {
    }, 
})
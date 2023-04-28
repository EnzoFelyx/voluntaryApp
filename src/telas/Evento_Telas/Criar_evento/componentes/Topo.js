import React from "react";
import { StyleSheet, View } from "react-native";
import Texto from "../../../../componentes/texto";
import Input from "../../../../componentes/Input";
import Botao from "../../../../componentes/Botao";
import Imagem from "../../../../componentes/Imagem";
import mais from "../../../../../assets/mais.png";


export default function Topo({ titulos, interacoes }) {
    return (
    <View style = {estilos.container}>
        <View style={estilos.viewInput}>
            <Texto>{titulos.evento}</Texto>
            <Input entrada="Nome do evento" tipo={'1'}/>
        </View>



    <View style={estilos.viewInput}>
        <View style={estilos.viewInputPequena}>
              {/*data*/}
            <Texto>{titulos.data}</Texto>
              {/*Hora*/}
            <Texto style={{marginHorizontal: 60}}>{titulos.comeca}</Texto>
        </View>
        <View style={estilos.viewInputPequena}>
             {/*data*/}
            <Input style={{marginHorizontal: 10}} entrada="dd/mm/aa" tipo={2}/>
            {/*Hora*/}
            <Input style={{marginHorizontal: 10}} entrada="Horário"  tipo={2}/>
        </View> 
    </View>



        <View style={estilos.viewInput}>
            <Texto>{titulos.fotoCapa}</Texto>

            <Botao tipo={5} texto={
                <View >
                    <Imagem imagem={mais} tipo={ 'icone'} />
                </View>}/>
        </View>

        <View style={estilos.viewInput}>
            <Texto>{titulos.descricao}</Texto>
            <Input style={{marginHorizontal: 10}} entrada="Digite aqui ..." tipo={3}/>

            
        </View>

    
        
    </View>
)
}

const estilos = StyleSheet.create({
    topo: {

    },
    container:
    {
        flex:1
    },
    viewInput: {
        marginTop:10,
        marginEnd:10,
        flexDirection: 'column'
    },

    viewInputPequena: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10
    }


})

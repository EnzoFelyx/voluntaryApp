import React from "react";
import { View, StyleSheet,Text } from "react-native";
import Texto from "../../../../componentes/texto";
import MyImageList from './Dados';


export default function Lista() {
   return <>
    <View style={{marginRight:110}}>{/*Margem apenas para adequar ao figma*/}
        <Texto>Confira abaixo uma lista de eventos em que você está inscrito</Texto>
        </View>
        

        <View style={{marginTop:40}}>
         <Texto> Nº de eventos inscritos: 2 </Texto> 
        </View>

        {/*View da Flatlist*/}
         <View style={{flex:1}}>
                <View style={{ flexDirection: "row" }}>
                    <MyImageList/>
                 </View>
        </View>
    </> 
}


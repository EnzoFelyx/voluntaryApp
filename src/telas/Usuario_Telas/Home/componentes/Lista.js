import React from "react";
import { View, StyleSheet,Text } from "react-native";
import Texto from "../../../../componentes/texto";
import Titulo from "../../../../componentes/Titulo";
import MyImageList from './Eventos';
import Destaques from "./Destaques";
import Ongs from "./Ongs";
import Linha from "../../../../componentes/Linha";



export default function Lista({subtitulo,frases}) {
   return (
   <View style = {{flex:1}}>
    <Titulo entrada={subtitulo.subtitle} />

        <View style={{flex:1, marginTop:20, marginBottom:20}} >
            <Texto>{frases.mensagem}</Texto>
        </View>

<Linha/>
            <View style={{flex:1, marginTop:20}}>
                <Text style={estilos.titulosFlatLists}>Eventos:</Text>
                <View style={{ flexDirection: "row" }}>
                    <MyImageList/>
                 </View>
            </View>


            <View style={estilos.viewDestaque}>
            <Text style={estilos.titulosFlatLists}>Destaques do mês:</Text>
                <View style={estilos.viewBotaoDestaque}>
                    <Destaques/>
                 </View>
            </View>


            <View style={estilos.viewOngsDestaque}>
            <Text style={estilos.titulosFlatLists}>ONGS:</Text>
                <View style={estilos.viewBotaoOngsDestaque}>
                    <Ongs/>
                 </View>
            </View>
    </View>
   ); 
}

const estilos = StyleSheet.create({
    viewDestaque: {
        flex:1,
        width:350,
        height:245,
        alignSelf:'flex-end',
        justifyContent: 'flex-end',
        marginTop:40,
    

    },
    viewBotaoDestaque: {
        alignItems:'center',
        flexDirection: "row",
        
        
    },

    viewOngsDestaque: {
        //backgroundColor: '#E4F4CD',
        alignSelf:'flex-end',
        marginTop:40

    },
    viewBotaoOngsDestaque: {
        alignItems:'center',
        marginBottom:10,
        flexDirection: "row"

        
    },
    titulosFlatLists:
    {   
        fontSize: 16,
        lineHeight: 42,
        fontWeight: "bold",
    }

})


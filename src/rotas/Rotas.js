import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //importa
import { MaterialCommunityIcons } from '@expo/vector-icons';

//importando paginas da TabBar.
//Eventos
import SeusEventosRotas from "./Rotas_seus_eventos";
//Home
import HomeRotas from "./Rotas_home";
//Buscar 
import BuscarRotas from "./Rotas_buscar"
//Perfil
import Perfilrotas from "./Rotas_perfil";


const Tab = createBottomTabNavigator();


export default function Rotas ()
{

return<Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#ffff',
        tabBarActiveBackgroundColor :'#649469', //selecionado
        tabBarInactiveBackgroundColor:'#649469',
        tabBarInactiveTintColor:'#D3d3d3', // n selecionado
        TabBa:'#649469',
        style:
        {
        height:70,
        borderRadius:15,
        },
        labelStyle: //estilo dos botões
        {   
            fontWeight:'bold',
            fontSize:16,
            lineHeight:21,
            paddingBottom:10,
            backgroundColor:'#649469'
        },
        keyboardHidesTabBar: 'true',
         //esconde a tab bar quando abre o teclado
    }}>


        <Tab.Screen name="Eventos"  
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="account-group" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }} component={SeusEventosRotas}/>
                
          

        <Tab.Screen name = "Home"
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="home-account" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }} component = {HomeRotas}/>
           

        <Tab.Screen name = "Buscar"
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="magnify" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }}
            component = {BuscarRotas}/>

        <Tab.Screen name = "Perfil"
        options={{
            tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons 
            name="account-outline" 
            color={'black'} 
            size={focused ? 35 : 30}
            style={{ flex:1,marginTop:5 }} />
            )
            }} component={Perfilrotas}/>
           
    

    </Tab.Navigator>

}
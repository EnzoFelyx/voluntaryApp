import React from "react";

import { NavigationContainer,View } from "@react-navigation/native";
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
import Perfil from "../telas/Perfil_Telas/Perfil/Perfil";




import Perfil_mocks from "../mocks/Perfil_Mocks/Perfil_mocks";


const Tab = createBottomTabNavigator();


export default function Rotas ()
{

return <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
        activeTintColor: '#ffff', //selecionado
        activeBackgroundColor:'#649469',
        inactiveTintColor:'#D3d3d3', // n selecionado
        inactiveBackgroundColor:'#649469',
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
            }}>
            {(props) => <Perfil {...Perfil_mocks}/>}
        </Tab.Screen>

    </Tab.Navigator>
</NavigationContainer>

}
import React from "react";
import { SafeAreaView, Text, View,TouchableOpacity } from "react-native";
import Linha from "../../../../componentes/Linha";
import Texto from "../../../../componentes/texto";
import Eventos from './Dados';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Lista({ mensagem, botao, contador }) {

    const navigation = useNavigation();

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 12 }}>{/*Margem apenas para adequar ao figma*/}
            <Texto>{mensagem}</Texto>
        </View>


        <View style={{ marginTop: 40, marginBottom: 24, }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{contador}</Text>
        </View>

        <Linha />

        {/*View da Flatlist*/}
        <View style={{ flex: 1 }}>
            <View>
                <Eventos />
            </View>

            <TouchableOpacity 
            style={
            {position:'absolute',
            marginRight: "auto",
            marginRight: 24,
            marginTop:350}
            } 
             
            onPress={() => navigation.navigate ('CriarEvento')}> 

            <MaterialCommunityIcons name={"plus-circle-outline"} size={36} color="black"  style={{ marginRight: 8,  } }/>
        </TouchableOpacity>

        </View>

        

       

    </SafeAreaView>
}


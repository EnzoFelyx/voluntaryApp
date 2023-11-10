import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Linha from "../../../../componentes/Linha";
import Texto from "../../../../componentes/texto";
import Botao from "../../../../componentes/Botao";
import Organizadora from "../../../../componentes/Organizadora";
import Imagem from "../../../../componentes/Imagem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Lista({ mensagem, dadosEventos }) {

    const navigation = useNavigation();

    return (<>
        <View style={{ paddingHorizontal: 12 }}>{/*Margem apenas para adequar ao figma*/}
            <Texto>{mensagem}</Texto>
        </View>


        {/*<View style={{ marginTop: 40, marginBottom: 24, }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Nº de eventos inscritos: {dadosEventos.length}</Text>
    </View>*/}

        <Linha />
        
       

        
        <>
            <FlatList
                data={dadosEventos}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item }) => (
                    <ScrollView>
                        <Botao
                            tipo={3}
                            texto={
                                <View style={{ flex: 1 }}>
                                    <Imagem imagem={{ uri: item.imagemEvento }} tipo={'imagemEvento'} />
                                    <Text style={{ marginLeft: 12, fontSize: 16 }}>{item.nomeEvento}</Text>
                                </View>
                            }
                            acao={() => navigation.navigate('Detalhes', { item })} 
                        />

                        <View style={{ marginTop: 12, marginRight: 16 }}>
                            <Organizadora image={{ uri: item.imagemCriadorEvento }} nome={item.criadorEvento} acao={() => navigation.navigate('PerfilCriadorEvento', { item })} />
                        </View>
                    </ScrollView>
                )}
            />
        </>

          <View>
             <TouchableOpacity
                onPress={() => navigation.navigate('CriarEvento')}>
                <MaterialCommunityIcons name={"plus-circle-outline"} size={36} color="black" style={{ marginRight: 8 }} />
            </TouchableOpacity>
        </View>

        

        

        {/*View da Flatlist*/}
    

    </>)
}


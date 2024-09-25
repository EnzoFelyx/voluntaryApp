import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import mapa from "../../../../../assets/mapa.png";
import { newEvent } from "../../../../../config/text.json";
import Button from "../../../../components/Button";
import Imagem from "../../../../components/Image";
import Input from "../../../../components/Input";
import Line from "../../../../components/Line";
import Texto from "../../../../components/texto";
import { CircleX } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function SecondStep() {

    const { city, state, neighborhood, cep, street, streetLeg, button } = newEvent.page2

    const [Ename, setName] = useState('');
    const [Edate, setDate] = useState('');
    const [Eperiod, setPeriod] = useState('');
    const [Estart, setStart] = useState('');
    const [Eends, setEnds] = useState('');

    const navigation = useNavigation();


    return (
        <>
            <Texto>Mapa</Texto>

            <View style={estilos.containerMapa}>

                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity
                        style={estilos.mapinha}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Maps')}
                    >
                        <Imagem imagem={mapa} tipo={'mapa'} />
                    </TouchableOpacity>

                    <View style={{ marginLeft: 16 }}>
                        <Texto>Localização:</Texto>
                        <Texto>Praia dos Milionários</Texto>
                    </View>

                </View>
                <TouchableOpacity>
                    <CircleX color={"#767676"} size={25} />
                </TouchableOpacity>
            </View>

            <Line />

            <View style={{ marginTop: 24 }}>

                <View style={estilos.smallInput}>

                    <View style={estilos.container}>
                        <Texto>{city}</Texto>
                        <Input
                            entrada={''}
                            tipo={2}
                            valor={Edate}
                            onChangeText={setDate} />
                    </View>

                    <View>
                        <Texto>{state}</Texto>
                        <Input
                            entrada={'SP'}
                            tipo={2}
                            valor={Eperiod}
                            onChangeText={setPeriod} />
                    </View>
                </View>

                <View style={estilos.smallInput}>

                    <View style={estilos.container}>
                        <Texto>{neighborhood}</Texto>
                        <Input
                            entrada={''}
                            tipo={2}
                            valor={Edate}
                            onChangeText={setDate} />
                    </View>

                    <View style={estilos.container}>
                        <Texto>{cep}</Texto>
                        <Input
                            entrada={''}
                            tipo={2}
                            valor={Eperiod}
                            onChangeText={setPeriod} />
                    </View>
                </View>


                <View style={estilos.input}>
                    <Texto>{street}</Texto>
                    <Input
                        entrada={streetLeg}
                        tipo={'1'}
                        valor={Ename}
                        onChangeText={setName} />
                </View>

            </View>

            <Button tipo={1} texto={button} />




        </>
    );
}

const estilos = StyleSheet.create({

    container: {
        flex: 1
    },

    input: {
        marginBottom: 16,
    },

    smallInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    containerMapa: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16
    },

    mapinha: {
        backgroundColor: '#e5f9c6',
        borderRadius: 15,
        paddingTop: 1,
        width: 54
    }

})

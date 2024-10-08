import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import mapa from "../../../../../assets/mapa.png";
import { newEvent } from "../../../../../config/text.json";
import Button from "../../../../components/Button";
import Imagem from "../../../../components/Image";
import Input from "../../../../components/Input";
import Line from "../../../../components/Line";
import Texto from "../../../../components/texto";

export default function SecondStep({ feedBack }) {

    const { city, state, neighborhood, cep, street, button } = newEvent.page2

    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [thiscep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [pais, setPais] = useState('');

    const navigation = useNavigation();

    const route = useRoute();

    useEffect(() => {
        if (route.params?.address) {
            const [latitude, longitude, number, rua, bairro, cidade, estado, pais, cep] = route.params.address;
            setEstado(estado || '');
            setCidade(cidade || '');
            setBairro(bairro || '');
            setCep(cep || '');
            setLogradouro(`${rua || ''},  ${number || ''}`.trim());
            setLatitude(latitude);
            setLongitude(longitude);
            setPais(pais);
        }
    }, [route.params?.address]);
    return (
        <>
            <Texto>Mapa</Texto>

            <View style={estilos.containerMapa}>

                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity
                        style={estilos.mapinha}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Maps', { ...feedBack })}
                    >
                        <Imagem imagem={mapa} tipo={'mapa'} />
                    </TouchableOpacity>

                    <View style={{ marginLeft: 16 }}>
                        <Texto>Localização:</Texto>
                        <Texto>Buscar no mapa o local</Texto>
                    </View>

                </View>
            </View>

            <Line />

            <View style={{ marginTop: 24 }}>

                <View style={estilos.smallInput}>

                    <View style={estilos.container}>
                        <Texto>{city}</Texto>
                        <Input
                            entrada={''}
                            tipo={2}
                            valor={cidade}
                            onChangeText={setCidade} />
                    </View>

                    <View>
                        <Texto>{state}</Texto>
                        <Input
                            entrada={''}
                            tipo={2}
                            valor={estado}
                            onChangeText={setEstado} />
                    </View>
                </View>

                <View style={estilos.smallInput}>

                    <View style={estilos.container}>
                        <Texto>{neighborhood}</Texto>
                        <Input
                            entrada={''}
                            tipo={2}
                            valor={bairro}
                            onChangeText={setBairro} />
                    </View>

                    <View style={estilos.container}>
                        <Texto>{cep}</Texto>
                        <Input
                            entrada={''}
                            tipo={2}
                            valor={thiscep}
                            onChangeText={setCep} />
                    </View>
                </View>


                <View style={estilos.input}>
                    <Texto>{street}</Texto>
                    <Input
                        entrada={''}
                        tipo={'1'}
                        valor={logradouro}
                        onChangeText={setLogradouro} />
                </View>

            </View>

            <Button tipo={1} texto={'Continuar'} acao={() => navigation.navigate('FinalStep')} />




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
        marginVertical: 16,
        overflow: "hidden",
    },

    mapinha: {
        backgroundColor: '#e5f9c6',
        borderRadius: 15,
        paddingTop: 1,
        width: 54
    }

})

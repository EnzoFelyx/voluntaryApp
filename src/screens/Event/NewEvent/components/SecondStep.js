import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { newEvent } from "../../../../../config/text.json";
import Input from "../../../../components/Input";
import Texto from "../../../../components/texto";
import Button from "../../../../components/Button";

export default function SecondStep() {

    const { map, mapLeg, city, state, neighborhood, cep, street, streetLeg, button } = newEvent.page2

    const [Ename, setName] = useState('');
    const [Edate, setDate] = useState('');
    const [Eperiod, setPeriod] = useState('');
    const [Estart, setStart] = useState('');
    const [Eends, setEnds] = useState('');


    return (
        <>


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

})

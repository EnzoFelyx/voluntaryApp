import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { newEvent } from "../../../../../config/text.json";
import Input from "../../../../components/Input";
import Texto from "../../../../components/texto";

export default function FirstStep() {

    const { name, nameLeg, date, dateLeg, period, periodLeg, start, timeLeg, ends } = newEvent.page1

    const [Ename, setName] = useState('');
    const [Edate, setDate] = useState('');
    const [Eperiod, setPeriod] = useState('');
    const [Estart, setStart] = useState('');
    const [Eends, setEnds] = useState('');


    return (
        <>
            <View style={estilos.input}>
                <Texto>{name}</Texto>
                <Input
                    entrada={nameLeg}
                    tipo={'1'}
                    valor={Ename}
                    onChangeText={setName} />
            </View>

            <View style={estilos.smallInput}>

                <View style={estilos.container}>
                    <Texto>{date}</Texto>
                    <Input
                        entrada={dateLeg}
                        tipo={2}
                        valor={Edate}
                        onChangeText={setDate} />
                </View>

                <View style={estilos.container}>
                    <Texto>{period}</Texto>
                    <Input
                        entrada={periodLeg}
                        tipo={2}
                        valor={Eperiod}
                        onChangeText={setPeriod} />
                </View>
            </View>



            <View style={estilos.smallInput}>

                <View style={estilos.container}>

                    <Texto>{start}</Texto>
                    <Input
                        entrada={timeLeg}
                        tipo={2}
                        valor={Estart}
                        onChangeText={setStart} />

                </View>

                <View style={estilos.container}>

                    <Texto>{ends}</Texto>
                    <Input
                        entrada={timeLeg}
                        tipo={2}
                        valor={Eends}
                        onChangeText={setEnds} />

                </View>

            </View>
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

import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { search } from "../../../../config/text.json";
import Title from '../../../components/Title';
import useSearch from "../../../hooks/useSearch";
import Event from "./Event";

export default function Bloom() {

    const { searchFor, subtitle } = search.body
    const [nomeDoEvento, setNomeEvento] = useState('');
    const isFocused = useIsFocused();
    const lista = useSearch(nomeDoEvento);

    useEffect(() => {
        if (!isFocused) {
            setNomeEvento('');
        }
    }, [isFocused]);

    return (
        <View>
            <TextInput
                style={estilos.caixa}
                setNomeEvento={''}
                placeholder={searchFor}
                autoCapitalize="none"
                value={nomeDoEvento}
                onChangeText={setNomeEvento}
            />
            <View>
                <Title
                    entrada={subtitle}
                    tipo={"Titulo"}
                />
                <FlatList
                    data={lista}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Event {...item} feedBack={item} />
                    } />

            </View>
        </View>
    );
}

const estilos = StyleSheet.create({

    caixa: {
        alignItems: 'center',
        height: 50,
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: "rgba(255,255,255,0.75)",
        borderRadius: 20,
        paddingLeft: 24,
        flexDirection: "row",
    },

});

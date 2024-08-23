import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { search } from "../../../../config/text.json";
import useSearch from "../../../hooks/useSearch";
import ListarBusca from "./ListarBusca";


export default function Buscar() {

    const { searchFor } = search.body
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
            {/* <View>
                <FlatList
                    data={lista}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListarBusca {...item} feedBack={item} />
                    } />
            </View> */}
        </View>
    );
}

const estilos = StyleSheet.create({

    caixa: {
        alignItems: 'center',
        height: 50,
        marginBottom: 16,
        backgroundColor: "#ffff",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#9dc662",
        paddingLeft: 24,
        flexDirection: "row",
    },

});

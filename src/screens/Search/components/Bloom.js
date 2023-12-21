import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import pessoas from "../../../../assets/buscar/pessoas.png";
import { search } from "../../../../config/text.json";
import Button from '../../../components/Button';
import Image from "../../../components/Image";
import Title from '../../../components/Title';
import Texto from "../../../components/texto";
import useSearch from "../../../hooks/useSearch";

export default function Bloom() {

    const navigation = useNavigation();
    const { search, subtitle } = search.body
    const [nomeDoEvento, setNomeEvento] = useState('');
    const lista = useSearch(nomeDoEvento);

    return (
        <SafeAreaView>
            <View style={estilos.caixa}>
                <TextInput
                    style={estilos.caixaInput}
                    setNomeEvento={''}
                    placeholder={search}
                    autoCapitalize="none"
                    value={nomeDoEvento}
                    onChangeText={setNomeEvento}
                />
                {/* <Icone icone={"magnify"} tamanho={24} tipo={"pesquisa"} acao={busca} /> */}
            </View>

            <View>
                <View>
                    {lista.length > 0 && (
                        <>
                            <Title entrada={subtitle} tipo={"Titulo"} />
                            <FlatList
                                data={lista}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View>
                                        <Button
                                            tipo={3}
                                            texto={
                                                <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                                                    <Texto style={estilos.nome}>{item.nomeEvento}</Texto>
                                                </View>
                                            }
                                            acao={() => navigation.navigate('Detalhes', { item })}
                                        />
                                        <View style={{ flexDirection: "row" }}>
                                            <Texto style={estilos.local}>{item.localEvento}</Texto>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    marginLeft: "auto",
                                                    marginRight: 20,
                                                }}
                                            >
                                                <Image imagem={pessoas} tipo={"icone"} />
                                                <Texto style={estilos.contador}>{item.contPessoas}</Texto>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    caixa: {
        fontSize: 18,
        flexDirection: "row",
    },
    nome: {
        fontWeight: "bold",
        fontSize: 16,
    },
    data: {
        marginLeft: "auto",
        marginRight: 8,
        fontSize: 14,
        textAlign: 'right',
    },
    local: {
        textAlign: 'right',
        marginHorizontal: 8,
    },
    contador: {},
});

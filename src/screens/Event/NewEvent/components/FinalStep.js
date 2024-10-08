import { CirclePlus, CloudUpload, Trash2 } from "lucide-react-native";
import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../../../../components/Input";
import Image from "../../../../components/Image";
import Button from "../../../../components/Button";
import Texto from "../../../../components/texto";
import { estilos } from "./estilos";

import * as ImagePicker from "expo-image-picker"
import Screen from "../../../../components/Screen";
import Top from "../../../../components/Top";
import Background from "../../../../components/Background";


export default function FinalStep() {

    const [descricao, setDescricao] = useState();
    const [participante, setParticipante] = useState();
    const [publico, setPublico] = useState(true);

    const [inputHeight, setInputHeight] = useState(40);

    const [capaImagem, setImagemCapa] = useState();

    const [fotosEvento, setFotosEvento] = useState([]);

    const toggleStatus = () => {
        setPublico((inputHeight) => !inputHeight);
    };

    const excluirFoto = (index) => {
        Alert.alert(
            "Confirmação de Exclusão",
            "Você tem certeza que deseja excluir esta foto?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Excluir",
                    onPress: () => {
                        setFotosEvento((prevFotos) => prevFotos.filter((_, i) => i !== index));
                    },
                }
            ]
        );
    };


    const uploadImage = async (mode) => {

        try {
            let result = {}
            if (mode == "gallery") {
                await ImagePicker.requestCameraPermissionsAsync();
                result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    aspect: [1, 1],
                    quality: 1,
                })
            } else {
                await ImagePicker.requestCameraPermissionsAsync()
                result = await ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.front,
                    aspect: [1, 1],
                    quality: 1,
                });
            }

            if (!result.canceled) {
                await saveImage(result.assets[0].uri)
            }
        } catch (error) {
            console.log("Error uploading image")
        }
    }

    const saveImage = async (image) => {
        try {
            setImagemCapa(image)
        } catch (error) {
            throw error;
        }
    }

    const uploadImagens = async (mode) => {
        try {
            let result = {};
            if (mode === "gallery") {
                await ImagePicker.requestCameraPermissionsAsync();
                result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    aspect: [1, 1],
                    quality: 1,
                    allowsMultipleSelection: true,
                });
            } else {
                await ImagePicker.requestCameraPermissionsAsync();
                result = await ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.front,
                    aspect: [1, 1],
                    quality: 1,
                });
            }

            if (!result.canceled) {
                const novasImagens = result.assets.map(asset => asset.uri);
                const totalImagens = fotosEvento.length + novasImagens.length;
                if (totalImagens <= 3) {
                    setFotosEvento(prevFotos => [...prevFotos, ...novasImagens]);
                } else {
                    const maxImagensPermitidas = 3 - fotosEvento.length;
                    const imagensParaAdicionar = novasImagens.slice(0, maxImagensPermitidas);
                    setFotosEvento(prevFotos => [...prevFotos, ...imagensParaAdicionar]);
                    Alert.alert("Limite de 3 imagens atingido.");
                }
            }
        } catch (error) {
            console.log("Error uploading image", error);
        }
    };


    return (
        <>
            <Screen>
                <Top PerfilFoto={''} titulo={'Criar evento'} />
                <Background back="backOne">
                    <View style={estilos.input}>

                        <Texto>Foto de capa do evento</Texto>

                        <TouchableOpacity
                            onPress={() => uploadImage("gallery")}
                            style={{
                                height: 200,
                                marginVertical: 18,
                                backgroundColor: "#E4F4CD",
                                borderRadius: 24,
                                overflow: "hidden",
                                borderWidth: 3,
                                borderColor: "#E4F4CD"
                            }}
                        >
                            <View style={{ flex: 1, borderRadius: 24, alignItems: "center", justifyContent: "center" }}>
                                {capaImagem ? (
                                    <Image imagem={{ uri: capaImagem }} tipo={'capaImagem'} />
                                ) : (
                                    <CirclePlus size={40} color={"gray"} />
                                )}
                            </View>

                        </TouchableOpacity>

                    </View>

                    <View style={estilos.input}>
                        <Texto>Faça uma breve descrição sobre o evento</Texto>

                        <TextInput
                            style={[styles.textInput, { height: inputHeight }]}
                            multiline
                            value={descricao}
                            placeholder="Digite algo..."
                            onChangeText={setDescricao}
                            maxLength={300}
                            onContentSizeChange={(event) => {
                                setInputHeight(event.nativeEvent.contentSize.height);
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                        marginTop: 16,
                    }}>

                        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                            <Texto>Participantes</Texto>
                            <Input
                                keyType={'numeric'}
                                entrada={'0'}
                                leght={4}
                                tipo={3}
                                valor={participante}
                                onChangeText={setParticipante} />
                        </View>

                        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                            <Texto>Local</Texto>
                            <TouchableOpacity
                                onPress={toggleStatus}
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "#E4F4CD",
                                    borderRadius: 15,
                                    padding: 8,
                                }}>
                                <Texto>{publico ? 'Público' : 'Privado'}</Texto>
                            </TouchableOpacity>
                        </View>

                    </View >

                    <Texto>Fotos sobre o evento</Texto>

                    <View style={{ flexDirection: "row", marginTop: 16, marginBottom: 30 }}>

                        <TouchableOpacity
                            onPress={() => uploadImagens("gallery")}
                            disabled={fotosEvento.length >= 3}
                            style={{
                                backgroundColor: "#E4F4CD",
                                paddingVertical: 17,
                                borderRadius: 15,
                                paddingHorizontal: 20,
                                borderWidth: 1,
                                borderColor: "gray",
                                justifyContent: "center",
                                borderStyle: 'dashed',
                                borderRadius: 15,
                            }}>
                            <CirclePlus size={30} color={"gray"} />
                        </TouchableOpacity>

                        <FlatList
                            data={fotosEvento}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onLongPress={() => excluirFoto(index)} // Armazena o índice do item clicado
                                    style={{
                                        overflow: "hidden",
                                        borderRadius: 15,
                                        width: 70,
                                        height: 70,
                                        justifyContent: "center",
                                        borderWidth: 3,
                                        borderColor: "#E4F4CD",
                                    }}>
                                    <Image imagem={{ uri: item }} tipo={'fotosEvento'} />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            contentContainerStyle={{ gap: 16, marginLeft: 16 }}
                        />
                    </View>

                    <Button tipo={1} texto={'Criar evento'} />
                </Background>
            </Screen>

        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    textInput: {
        width: '100%',
        paddingLeft: 16,
        backgroundColor: "#E4F4CD",
        borderRadius: 15,
        marginTop: 16,
        paddingTop: 16,
        paddingBottom: 30,
    },
});
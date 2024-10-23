import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

import Default from '../../../../../assets/perfil/FotoDefault.png';
import { register } from "../../../../../config/text.json";
import Button from '../../../../components/Button';
import Image from '../../../../components/Image';
import Input from '../../../../components/Input';
import { criarConta } from "../../../../services/requests/cadastrar";

export default function Dados() {

    const [dados, setDados] = useState({});
    const [capaImagem, setImagemCapa] = useState();

    const navigation = useNavigation()

    const { name, email, cpf, password, confirm, button } = register.input
    const { error, registered } = register.warnings



    function atualizarDados(id, valor) {
        setDados({ ...dados, [id]: valor })

    }

    async function criar() {
        const resultado = await criarConta(
            dados[imagem],
            dados[nome],
            dados[email],
            dados[cpf],
            dados[senha]
        );

        if (resultado == 'Sucesso') {
            Alert.alert(registered)
            navigation.goBack()
        }
        else {
            Alert.alert(error)
        }
    };

    const uploadImage = async (mode) => {

        try {
            let result = {}
            if (mode == "gallery") {
                await ImagePicker.requestCameraPermissionsAsync();
                result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    aspect: [1, 1],
                    allowsEditing: true,
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

    return <>

        <TouchableOpacity
            onPress={() => uploadImage("gallery")}
        >
            {capaImagem ? (
                <Image imagem={{ uri: capaImagem }} tipo={'RegistrarFoto'} />
            ) : (
                <Image imagem={Default} tipo={"RegistrarFoto"} />
            )}
        </TouchableOpacity>

        <View style={{ marginBottom: 16, }}>
            <Input entrada={name} valor={dados[name]} onChangeText={(valor) => atualizarDados(name, valor)} />
            <Input entrada={email} valor={dados[email]} onChangeText={(valor) => atualizarDados(email, valor)} />
            <Input entrada={cpf} valor={dados[cpf]} onChangeText={(valor) => atualizarDados(cpf, valor)} />
            <Input entrada={password} valor={dados[password]} senha={true} onChangeText={(valor) => atualizarDados(password, valor)} />
            <Input entrada={confirm} valor={dados[confirm]} senha={true} onChangeText={(valor) => atualizarDados(confirm, valor)} />
            <Button texto={button} tipo={1} acao={criar} />
        </View>
    </>
}





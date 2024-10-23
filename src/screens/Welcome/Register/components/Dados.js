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
import { validarCNPJ, validarCPF, validarEmail } from "../../../../utils/validations";

export default function Dados() {

    const navigation = useNavigation()

    const { name, email, cpf, password, confirm, button } = register.input
    const { error, registered } = register.warnings

    const [nome, setNome] = useState();
    const [capaImagem, setImagemCapa] = useState();
    const [ownerMail, setOwnerMail] = useState();
    const [ownerType, setOwnerType] = useState();
    const [senha, setSenha] = useState();
    const [confirmar, setConfirm] = useState();

    async function criar() {

        if (!nome || !capaImagem || !ownerType || !ownerMail || !senha) {
            console.log("preencha todos os campos")
        }
        else if (senha !== confirmar) {
            console.log("Senhas diferentes! Confirme a senha corretamente.")
        }

        else if (!validarEmail(ownerMail)) {
            console.log("E-mail inválido");
        }

        else if (!validarCPF(ownerType) && !validarCNPJ(ownerType)) {
            console.log("CPF/CNPJ inválido");
        }

        else {
            const resultado = await criarConta(
                capaImagem,
                nome,
                ownerMail,
                ownerType,
                senha
            );

            if (resultado == 'Sucesso') {
                Alert.alert(registered)
                navigation.goBack()
            }
            else {
                Alert.alert(error)
            }
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
            <Input entrada={name} onChangeText={setNome} />
            <Input entrada={email} onChangeText={setOwnerMail} />
            <Input entrada={cpf} onChangeText={setOwnerType} keyType={'numeric'} />
            <Input entrada={password} senha={true} onChangeText={setSenha} />
            <Input entrada={confirm} senha={true} onChangeText={setConfirm} />
            <Button texto={button} tipo={1} acao={criar} />
        </View>
    </>
}





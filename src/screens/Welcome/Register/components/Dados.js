import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

import Default from '../../../../../assets/perfil/FotoDefault.png';
import { register } from "../../../../../config/text.json";
import Button from '../../../../components/Button';
import Image from '../../../../components/Image';
import Input from '../../../../components/Input';
import { criarConta, emailExistente } from "../../../../services/requests/cadastrar";
import { validarCNPJ, validarCPF, validarEmail } from "../../../../utils/validations";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dados() {

    const navigation = useNavigation()

    const { name, email, cpf, password, confirm, button } = register.input
    const { error, registered, logged } = register.warnings


    const [nome, setNome] = useState();
    const [capaImagem, setImagemCapa] = useState('https://github.com/user-attachments/assets/6d957f77-ab27-4e8e-a9ac-d1becdf87472');
    const [ownerMail, setOwnerMail] = useState();
    const [ownerType, setOwnerType] = useState();
    const [senha, setSenha] = useState();
    const [confirmar, setConfirm] = useState();

    async function criar() {

        if (!nome || !ownerType || !ownerMail || !senha) {
            return Alert.alert("Cadastro", "Preencha todos os campos!")
        }
        else if (senha !== confirmar) {
            return Alert.alert("Cadastro", "Senhas diferentes! Confirme a senha corretamente.")
        }

        else if (!validarEmail(ownerMail)) {
            return Alert.alert("Cadastro", "E-mail inválido");
        }

        else if (!validarCPF(ownerType) && !validarCNPJ(ownerType)) {
            return Alert.alert("Cadastro", "CPF/CNPJ inválido");
        }

        else {

            const verificaEmail = await emailExistente(ownerMail);

            if (verificaEmail) {
                Alert.alert('Cadastro', 'Email já em uso!')
            }

            else {

                const resultado = await criarConta(
                    capaImagem,
                    nome,
                    ownerMail,
                    ownerType,
                    senha
                );

                if (resultado) {
                    Alert.alert(registered)
                    logar(resultado)
                }
                else {
                    Alert.alert(error)
                }
            }
        }
    };

    async function logar(resultado) {
        try {
            await AsyncStorage.setItem("id", String(resultado));
            navigation.replace(logged);
        } catch (error) {
            Alert.alert(error);
        }
    }

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
            <Input entrada={cpf} onChangeText={setOwnerType} />
            <Input entrada={password} senha={true} onChangeText={setSenha} />
            <Input entrada={confirm} senha={true} onChangeText={setConfirm} />
            <View style={{marginTop: 30}}>
                <Button texto={button} tipo={1} acao={criar} />
            </View>
        </View>
    </>
}





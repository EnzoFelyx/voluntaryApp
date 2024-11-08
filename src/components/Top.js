import { useNavigation, CommonActions } from '@react-navigation/native';
import { LogOut } from 'lucide-react-native';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import Image from './Image';
import Return from './Return';
import Title from './Title';

const height = Dimensions.get('window').height;

export default function Cabecalho({ tipo = null, titulo = null, Foto = null, fotoEstilo = null }) {

    const navigation = useNavigation();

    switch (tipo) {

        case "Perfil":
            return <View style={estilos.topo}>
                <Title entrada={titulo} tipo={"Titulo"} />
                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            })
                        )
                    }
                >
                    <LogOut size={30} color={'red'} />
                </TouchableOpacity>
            </View>

            break;

        case "Welcome":
            return <View style={{ marginTop: 50 }}>
                <View style={{ marginLeft: 16 }}>
                    <Return />
                </View>
                <Image imagem={Foto} tipo={fotoEstilo} />
            </View>
            break;

        case "Details":
            return <View
                style={{
                    height: height * 0.35,
                    width: '100%'
                    }}>
                {/* <Return /> */}
                <Image imagem={Foto} tipo={fotoEstilo} />
            </View>
            break;

        case "Back":
            return <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center', marginLeft: 16, gap: 8, marginBottom: 12 }}>
                <Return />
                <Title entrada={titulo} tipo={"Titulo"} />
            </View>
            break;

        default:
            return <View style={estilos.topo}>
                <Title entrada={titulo} tipo={"Titulo"} />
                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Perfil' }],
                            })
                        )
                    }
                >
                    <Image imagem={Foto} tipo={'perfilFoto'} />
                </TouchableOpacity>
            </View>

            break;
    }
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 26,
        marginTop: 50,
        marginBottom: 12,
    },

    voltar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginTop: 50,
        marginBottom: 16,
        marginLeft: 16,
    },
})
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Background from '../../components/Background';
import Screen from '../../components/Screen';
import Image from '../../components/Image';
import Button from '../../components/Button';
import { useUsuarios } from '../../hooks/useHome';
import Highlights from '../Home/components/Highlights'
import { BadgePlus, Calendar, CalendarPlus2, CalendarX2, Trophy } from 'lucide-react-native';

export default function MyProfile() {

    const dadosDoUsuario = useUsuarios();

    return (
        <>
            <Screen>
                <Background back={"backOne"}>

                    <TouchableOpacity style={estilos.contorno}>
                        <Image imagem={{ uri: 'https://avatars.githubusercontent.com/u/101266167?v=4' }} tipo={"Perfil"} />
                    </TouchableOpacity>

                    <View style={{ alignItems: "center", marginBottom: 32, gap: 8 }}>
                        <Text style={estilos.nome}>Enzo Felix</Text>
                        <View style={{ flexDirection: "row", gap: 12 }}>
                            <Text style={estilos.subtitle}>52 seguidores</Text>
                            <Text style={estilos.subtitle}>55 seguindo</Text>
                        </View>
                    </View>

                    <Button texto={'SEGUIR'} tipo={5} />

                    <View style={{ flexDirection: "row", gap: 16, marginBottom: 8 }}>

                        <TouchableOpacity style={estilos.status}>
                            <Calendar size={26} color={"black"} />
                            <View>
                                <Text style={estilos.statusTitle}>11</Text>
                                <Text style={estilos.statusSubt}>Eventos</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.status}>
                            <CalendarPlus2 size={26} color={"black"} />
                            <View>
                                <Text style={estilos.statusTitle}>2</Text>
                                <Text style={estilos.statusSubt}>Criados</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: "row", gap: 16, marginBottom: 32 }}>

                        <TouchableOpacity style={estilos.status}>
                            <Trophy size={26} color={"black"} />
                            <View>
                                <Text style={estilos.statusTitle}>Diamante</Text>
                                <Text style={estilos.statusSubt}>Ranking</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.status}>
                            <BadgePlus size={26} color={"black"} />
                            <View>
                                <Text style={estilos.statusTitle}>13215</Text>
                                <Text style={estilos.statusSubt}>Experiência</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <Highlights dadosDoUsuario={dadosDoUsuario} titulo={'Sugestões'} />

                </Background>
            </Screen>
        </>
    )
}




const estilos = StyleSheet.create({
    perfilOption: {

        marginTop: 15,
        alignSelf: 'center',
        width: 342,
        height: 60,
        backgroundColor: "#E5ECB9",
        borderRadius: 15,
        flexDirection: 'row',
        elevation: 8,
        marginBottom: 12,
        alignItems: 'center'
    },

    texto: {
        textAlignVertical: 'center',
        marginLeft: 32,
        fontSize: 20,
        fontWeight: "bold",
    },
    contorno: {
        height: 150,
        width: 150,
        borderRadius: 90,
        alignSelf: 'center',
        backgroundColor: "#FFFFFFFF",
        marginTop: 16,
        marginBottom: 16,
    },

    nome: {
        fontSize: 22,
        fontWeight: "bold",
    },

    subtitle: {
        fontSize: 16,
    },

    status: {
        flexDirection: "row",
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "white",
        gap: 8
    },

    statusTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "gray"
    },
    statusSubt: {
        fontSize: 16,
        /* fontWeight: "bold", */
        color: "white"
    }
})
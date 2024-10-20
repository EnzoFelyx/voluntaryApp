import { BadgePlus, Calendar, CalendarPlus2, Trophy } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import Image from '../../components/Image';
import Top from '../../components/Top';
import useTopo from '../../hooks/useTop';
import Highlights from '../Home/components/Highlights';
import Achievements from './components/Achievements';
import { useRoute } from '@react-navigation/native';

export default function MyProfile() {

    const dadosDoUsuario = useTopo();

    const route = useRoute();
    console.log(route.params)

    /* const usuario = () => {
        if 
    } */



    const [follow, setFollow] = useState(Math.floor(Math.random() * 100) + 1);
    const [Followers, setFolllowers] = useState(Math.floor(Math.random() * 100) + 1);
    const [eventos, setEventos] = useState(Math.floor(Math.random() * 50) + 1);
    const [criados, setCriados] = useState(Math.floor(Math.random() * 10) + 1);
    const [xp, setXp] = useState(Math.floor(Math.random() * 10000) + 1);
    const [numero, setNumero] = useState(Math.floor(Math.random() * 5) + 1);

    const myElo = () => {
        let categoria;

        switch (numero) {
            case 1:
                categoria = 'Bronze';
                break;
            case 2:
                categoria = 'Prata';
                break;
            case 3:
                categoria = 'Ouro';
                break;
            case 4:
                categoria = 'Platina';
                break;
            case 5:
                categoria = 'Diamante';
                break;
            default:
                categoria = 'Bronze';
        }

        return categoria;
    };

    return (
        <ScrollView>

            <Top tipo={'Perfil'} titulo={'Perfil'} />

            <View style={{ flex: 1, backgroundColor: '#E4F4CD', borderTopStartRadius: 30, borderTopRightRadius: 30, marginTop: 6, borderWidth: 3, borderColor: "#CAF38D", paddingTop: 32 }}>


                <View>

                    <TouchableOpacity style={estilos.contorno}>
                        <Image imagem={{ uri: dadosDoUsuario.perfil }} tipo={"Perfil"} />
                    </TouchableOpacity>

                    <View style={{ alignItems: "center", marginBottom: 32, gap: 8 }}>
                        <Text style={estilos.nome}>{dadosDoUsuario.nome}</Text>
                        <View style={{ flexDirection: "row", gap: 12 }}>
                            <Text style={estilos.subtitle}>{follow} seguidores</Text>
                            <Text style={estilos.subtitle}>{Followers} seguindo</Text>
                        </View>
                    </View>

                    <Button texto={'SEGUIR'} tipo={5} />

                    <View style={estilos.achievements}>

                        <View style={{ flexDirection: "row", gap: 16 }}>
                            <Achievements Icone={Calendar} cor={"red"} sub={"Eventos"} legenda={eventos} />
                            <Achievements Icone={CalendarPlus2} cor={"blue"} sub={"Criados"} legenda={criados} />
                        </View>

                        <View style={{ flexDirection: "row", gap: 16 }}>
                            <Achievements Icone={Trophy} cor={"green"} sub={"Raking"} legenda={myElo()} />
                            <Achievements Icone={BadgePlus} cor={"black"} sub={"Experiência"} legenda={xp} />
                        </View>

                    </View>

                    <Highlights dadosDoUsuario={dadosDoUsuario} titulo={'Sugestões'} />
                </View>

            </View>

        </ScrollView>
    )
}


const estilos = StyleSheet.create({

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

    achievements: {
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 16,
        marginTop: 8,
        marginBottom: 32,
        gap: 12
    }
})
import { useIsFocused, useRoute } from '@react-navigation/native';
import { BadgePlus, Calendar, CalendarPlus2, Trophy } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import Image from '../../components/Image';
import Top from '../../components/Top';
import { useSugestoes } from '../../hooks/UseMyProfile';
import useTopo from '../../hooks/useTop';
import { amarrarSeguidor, procurarAmigo } from '../../services/requests/usuario';
import Highlights from '../Home/components/Highlights';
import Achievements from './components/Achievements';
import AnimetedView from '../../components/Animeted';
import useLoading from '../../hooks/useSkeleton';


const height = Dimensions.get('window').height;

export default function MyProfile() {

    const route = useRoute();
    const isFocused = useIsFocused();
    const myUser = useTopo();

    const loading = useLoading();

    const id = [myUser.id, route?.params?.id]

    const [follow, setFollow] = useState();
    const [Followers, setFolllowers] = useState();
    const [eventos, setEventos] = useState();
    const [criados, setCriados] = useState();
    const [xp, setXp] = useState();
    const [numero, setNumero] = useState();
    const [userNow, setUserNow] = useState(null);

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

    const dadosDoUsuario = useTopo();

    const dadosUsers = useSugestoes(route?.params?.id);

    const tipoTop = route.name === 'OtherProfile' ? 'Back' : 'Perfil';
    const titulo = route.name === 'OtherProfile' ? 'Visitando perfil' : 'Meu Perfil';

    const [myFriend, setIsMyFriend] = useState(true);
    const [updateTrigger, setUpdateTrigger] = useState(false);

    async function isAmigo(id) {
        const amigo = await procurarAmigo(id);
        setIsMyFriend(amigo)
    }

    async function amarrarAmigo(id) {
        const amigo = await amarrarSeguidor(id);
        setUpdateTrigger(!updateTrigger);
    }

    useEffect(() => {
        if (route.name === 'OtherProfile') {

            if (id) {
                isAmigo(id)
            }
        }
    }, [updateTrigger, myUser.id]);

    useEffect(() => {
        setUserNow(null)
        if (route.name === "OtherProfile") {
            setUserNow(route.params);
        } else {
            setUserNow(dadosDoUsuario);
        }
        setFollow(Math.floor(Math.random() * 100) + 1)
        setFolllowers(Math.floor(Math.random() * 100) + 1)
        setEventos(Math.floor(Math.random() * 50) + 1)
        setCriados(Math.floor(Math.random() * 10) + 1)
        setXp(Math.floor(Math.random() * 10000) + 1)
        setNumero(Math.floor(Math.random() * 5) + 1)
    }, [route.params, dadosDoUsuario, isFocused]);


    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <Top tipo={tipoTop} titulo={titulo} />

            <View style={{
                flex: 1,
                backgroundColor: '#E4F4CD',
                height: height * 1.12,
                borderTopStartRadius: 30,
                borderTopRightRadius: 30,
                marginTop: 6,
                borderWidth: 3,
                borderColor: "#CAF38D",
                paddingTop: 32,
            }}>

                {loading ? (<>
                    <View style={estilos.contorno}>
                        <AnimetedView width={'25%'} length={200} />
                    </View>

                    <View style={{ alignItems: "center", marginBottom: 32, gap: 8 }}>
                        <View style={{
                            marginTop: 5,
                            overflow: "hidden",
                            backgroundColor: "#DEDFE3",
                            borderRadius: 15,
                            width: 150,
                            height: 25,
                        }}>
                            <AnimetedView width={'25%'} length={150} />
                        </View>
                        <View style={{ flexDirection: "row", gap: 12, marginTop: 10 }}>
                            <View style={{
                                overflow: "hidden",
                                backgroundColor: "#DEDFE3",
                                borderRadius: 15,
                                width: 125,
                                height: 20,
                            }}>
                                <AnimetedView width={'25%'} length={125} />
                            </View>
                            <View style={{
                                overflow: "hidden",
                                backgroundColor: "#DEDFE3",
                                borderRadius: 15,
                                width: 125,
                                height: 20,
                            }}>
                                <AnimetedView width={'25%'} length={125} />
                            </View>
                        </View>
                    </View>
                </>

                ) :
                    (<>
                        <TouchableOpacity style={[estilos.contorno, { backgroundColor: "#FFFF" }]}>
                            <Image imagem={{ uri: userNow?.perfil }} tipo={"Perfil"} />
                        </TouchableOpacity>

                        < View style={{ alignItems: "center", marginBottom: 32, gap: 8 }}>
                            <Text style={estilos.nome}>{userNow?.nome}</Text>
                            <View style={{ flexDirection: "row", gap: 12 }}>
                                <Text style={estilos.subtitle}>{follow} seguidores</Text>
                                <Text style={estilos.subtitle}>{Followers} seguindo</Text>
                            </View>
                        </View>
                    </>
                    )}

                {
                    route.name !== 'OtherProfile' ? (
                        <Button
                            texto="Meus contatos"
                            tipo={7}
                        />
                    ) : myFriend === true ? (
                        <Button
                            texto="Conectar-se"
                            tipo={5}
                            acao={() => amarrarAmigo(id)}
                        />
                    ) : (
                        <Button
                            texto="Seguindo"
                            tipo={7}
                            acao={() => amarrarAmigo(id)}
                        />
                    )
                }



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
                <Highlights dadosDoUsuario={dadosUsers} titulo={'Sugestões'} />
            </View>

        </ScrollView >
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
        backgroundColor: "#DEDFE3",
        marginTop: 16,
        marginBottom: 16,
        overflow: "hidden",
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
import { useNavigation } from '@react-navigation/native';
import { EllipsisVertical, Plus } from 'lucide-react-native';
import { React, useEffect, useState } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Interaction from '../../../components/Interation';
import Owner from '../../../components/Owner';
import { useEventos } from '../../../hooks/useHome';
import { estilos } from './estilos';
import AnimetedView from '../../../components/Animeted';
import useLoading from '../../../hooks/useSkeleton';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Explore() {

    const dadosEventos = useEventos();

    const navigation = useNavigation();

    const loading = useLoading();

    const [expandirEventos, setExpandirEventos] = useState({});


    const toggleExpandir = (id) => {
        setExpandirEventos((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const DescricaoFormated = (descricao) => {
        return <>
            <Text style={{ fontWeight: '400' }}>{descricao}</Text>
        </>
    };

    const SkeletonFeed = () => {
        return <View
            style={{
                borderRadius: 15,
                marginHorizontal: 8,
                paddingTop: 16,
                paddingHorizontal: 8,
                marginVertical: 16,
                backgroundColor: "#FFFF",
                paddingBottom: 30,
            }
            } >
            <View
                style={{
                    flexDirection: "row",
                    marginLeft: 8,
                    marginBottom: 16,
                    marginTop: 8,
                }}>
                <View
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 30,
                        overflow: "hidden",
                        backgroundColor: "#DEDFE3",
                    }}>
                    <AnimetedView width={'25%'} length={50} />
                </View>

                <View >
                    <View
                        style={{
                            overflow: "hidden",
                            backgroundColor: "#DEDFE3",
                            borderRadius: 8,
                            width: 150,
                            height: 15,
                            marginLeft: 8,
                            marginTop: 10,
                            alignSelf: 'center',
                            marginLeft: 15,
                        }}>
                        <AnimetedView width={'25%'} length={150} />
                    </View>
                    <View
                        style={{
                            overflow: "hidden",
                            backgroundColor: "#DEDFE3",
                            borderRadius: 8,
                            width: 75,
                            height: 12,
                            marginLeft: 14,
                            marginTop: 12
                        }}>
                        <AnimetedView width={'25%'} length={75} />
                    </View>


                </View>

            </View>

            <View
                style={{
                    overflow: "hidden",
                    backgroundColor: "#DEDFE3",
                    borderRadius: 8,
                    width: width * 0.85,
                    height: 15,
                    alignSelf: 'center',
                    marginTop: 10,
                }}>
                <AnimetedView width={'25%'} length={width} />
            </View>

            <View
                style={{
                    overflow: "hidden",
                    backgroundColor: "#DEDFE3",
                    borderRadius: 8,
                    width: width * 0.85,
                    height: 15,
                    alignSelf: 'center',
                    marginTop: 10,
                }}>
                <AnimetedView width={'25%'} length={width} />
            </View>



            <View
                style={{
                    overflow: "hidden",
                    backgroundColor: "#DEDFE3",
                    borderRadius: 8,
                    marginLeft: width * 0.0375,
                    width: width * 0.4,
                    height: 15,
                    marginTop: 10,
                }}>
                <AnimetedView width={'25%'} length={width * .4} />
            </View>

            <View
                style={{
                    overflow: "hidden",
                    marginTop: 25,
                    borderRadius: 15,
                    marginRight: 16,
                    width: '100%',
                    height: height * 0.25,
                    backgroundColor: "#DEDFE3",
                }}>
                <AnimetedView width={'10%'} length={width} />
            </View>

        </View >
    }

    const renderItem = ({ item }) => {
        const isExpandido = expandirEventos[item.id] || false;

        return (
            <View style={estilos.container}>
                <View style={estilos.owner}>
                    <Owner
                        image={{ uri: item.imagemCriadorEvento }}
                        nome={item.criadorEvento}
                        type="Explorar"
                        pessoa="person"
                        acao={() => {
                            navigation.navigate('OtherProfile', {
                                perfil: item.imagemCriadorEvento,
                                nome: item.criadorEvento,
                            });
                        }}
                    />
                    <View style={estilos.interaction}>
                        <TouchableOpacity>
                            <Plus size={23} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <EllipsisVertical size={23} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback style={estilos.legenda} onPress={() => toggleExpandir(item.id)}>
                    <Text style={{ fontWeight: '600' }} numberOfLines={isExpandido ? undefined : 3}>
                        {item.nomeEvento}: {''}
                        {DescricaoFormated(item.descricao)}
                    </Text>
                </TouchableWithoutFeedback>

                <View style={{marginBottom: 10}}/>

                <Interaction
                    tipo="subsEvento"
                    imagem={{ uri: item.imagemEvento }}
                    styleImg="imagemEvento"
                    texto=""
                    acao={() => navigation.navigate('Detalhes', { item })}
                />
            </View>
        );
    };

    return (
        <>
            {loading ? (
                <>
                    <SkeletonFeed />
                    <SkeletonFeed />
                </>
            ) : (
                <FlatList
                    data={dadosEventos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={false}
                />
            )}
        </>
    )
}
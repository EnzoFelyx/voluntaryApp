import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync
} from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert, Linking, Platform, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Modal } from '../../../components/Modal';
import Top from '../../../components/Top';
import Texto from '../../../components/texto';
import { pesquisarEndereco } from '../../../services/requests/maps';
import { styles } from './estilos';
import Search from './Search';
import Topo from './Topo';
import { CalendarDays, Clock } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const MODAL = {
    NONE: 0,
    UPDATE_TRIP: 1,
}


export default function Maps() {

    const route = useRoute();

    const navigation = useNavigation();

    const { formatDate, Ename, Estart } = route.params
    const { coordendasEvento, dataEvento, horaEvento, nomeEvento } = route.params
    const nomeRota = route.name;

    const [selectedPlace, setSelectedPlace] = useState(null);
    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState([]);
    const [showModal, setShowModal] = useState(MODAL.NONE)

    const handleCoordenadasChange = (newCoordenadas) => {
        setMarker(newCoordenadas)
        setSelectedPlace(null)
        setSelectedPlace(newCoordenadas)
    };

    const handleMapPress = (e) => {
        const newMarker = e.nativeEvent.coordinate;
        setMarker(newMarker);
    };

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            const currentPossition = await getCurrentPositionAsync();
            setSelectedPlace({
                latitude: currentPossition.coords.latitude,
                longitude: currentPossition.coords.longitude,
            });
        }
    }

    const mostrarEndereco = async (latitude, longitude) => {
        setAddress(await pesquisarEndereco(latitude, longitude));
    }

    const handleReturn = () => {
        navigation.navigate('CriarEvento', { address });
    };

    async function handleOpenDeviceMap() {
        const scheme = Platform.select({
            ios: "maps://0,0?q=",
            android: "geo:0,0?q="
        })
        const latLgn = `${coordendasEvento[0]},${coordendasEvento[1]}`
        const label = nomeEvento

        const url = Platform.select({
            ios: `${scheme}${label}@${latLgn}`,
            android: `${scheme}${latLgn}(${label})`
        })

        if (!url) {
            return Alert.alert('Não foi possível abrir o mapa.')
        }

        const canOpen = await Linking.canOpenURL(url);

        if (!canOpen) {
            return Alert.alert('Não foi possível abrir o mapa.')
        }

        Linking.openURL(url)
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);


    return (<>

        <View style={styles.container}>

            {nomeRota === 'Maps' ?
                <>

                    <Top titulo={"Escolha o local"} />

                    <Search onCoordenadasChange={handleCoordenadasChange} />

                    {
                        selectedPlace &&
                        < MapView
                            style={styles.container}
                            showsUserLocation
                            region={{
                                latitude: selectedPlace.latitude,
                                longitude: selectedPlace.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                            onPress={handleMapPress}
                        >
                            {marker && (
                                <Marker
                                    coordinate={{
                                        latitude: marker?.latitude,
                                        longitude: marker?.longitude,
                                    }}
                                />
                            )}
                        </MapView>
                    }

                    {marker &&
                        <TouchableOpacity

                            style={styles.caixa}
                            onPress={() => {
                                if (marker && marker.latitude !== undefined && marker.longitude !== undefined) {
                                    mostrarEndereco(marker.latitude, marker.longitude);
                                } else {
                                    console.log('Coordenadas não disponíveis');
                                }
                            }}
                            onPressIn={() => setShowModal(MODAL.UPDATE_TRIP)}
                        >
                            <Texto style={styles.textoCaixa}>Adicionar local</Texto>

                        </TouchableOpacity>
                    }
                </>
                :
                <>
                    <MapView
                        style={styles.container}
                        region={{
                            latitude: coordendasEvento[0],
                            longitude: coordendasEvento[1],
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                        onPress={handleMapPress}
                    >
                        <Marker
                            title={nomeEvento}
                            subtitle={dataEvento}
                            coordinate={{
                                latitude: coordendasEvento[0],
                                longitude: coordendasEvento[1]
                            }}
                        />
                    </MapView>

                    <TouchableOpacity
                        style={styles.caixa}
                        onPress={() => {
                            mostrarEndereco(coordendasEvento[0], coordendasEvento[1]);
                        }}
                        onPressIn={() => setShowModal(MODAL.UPDATE_TRIP)}
                    >
                        <Texto style={styles.textoCaixa}>Detalhes do local</Texto>

                    </TouchableOpacity>
                </>
            }

            <Modal
                title="Informações do destino"
                subtitle="Veja se está tudo certo antes de continuar."
                visible={showModal === MODAL.UPDATE_TRIP}
                onClose={() => setShowModal(MODAL.NONE)}
            >
                <View style={{ marginVertical: 4 }}>

                    <View style={styles.info}>
                        <Text style={styles.infoText}>{Ename ? Ename : nomeEvento}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 16 }}>

                        <View style={[styles.info, { justifyContent: "center", gap: 8 }]}>
                            <CalendarDays color={"black"} size={25} />
                            <Text style={styles.infoText}>{formatDate ? formatDate : dataEvento}</Text>
                        </View>

                        <View style={[styles.info, { justifyContent: "center", gap: 8 }]}>
                            <Clock color={"black"} size={25} />
                            <Text style={styles.infoText}>{Estart ? Estart : horaEvento}h00</Text>
                        </View>
                    </View>

                    <Text style={styles.endereco}>Endereço</Text>

                    <View style={styles.info}>
                        {address?.[3] &&
                            <Text style={styles.infoText}>{address?.[3]}, {address?.[2]}</Text>}
                    </View>

                    <View style={{ flexDirection: 'row', gap: 16 }}>

                        <View style={styles.info}>
                            <Text style={styles.infoText}>{address?.[5]}</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.infoText}>{address?.[4]}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 16 }}>

                        <View style={styles.info}>
                            <Text style={styles.infoText}>{address?.[8]}</Text>
                        </View>

                        <View style={styles.info}>
                            {address?.[6] && address?.[7] &&
                                <Text style={styles.infoText}>{address?.[6]} / {address?.[7]}</Text>}
                        </View>

                    </View>
                    {nomeRota === 'Maps' ?
                        <TouchableOpacity
                            style={styles.infoCaixa}
                            onPress={() => {
                                setMarker(null)
                                setShowModal(MODAL.NONE)
                                handleReturn();
                            }}
                        >
                            <Text style={styles.textoCaixa}>Confirmar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.infoCaixa}
                            onPress={() => handleOpenDeviceMap()}
                        >
                            <Text style={styles.textoCaixa}>Ver no Maps</Text>
                        </TouchableOpacity>
                    }

                </View>

            </Modal>


        </View >
    </>

    );
}
import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync
} from 'expo-location';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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

    const { Edate, Ename, Estart } = route.params

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


    useEffect(() => {
        requestLocationPermissions();
    }, []);


    return (<>

        <View style={styles.container}>

            <Top titulo={"Escolha o local"} />

            <Search onCoordenadasChange={handleCoordenadasChange} />

            {
                selectedPlace &&
                <MapView
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

            <Modal
                title="Dê um nome ao destino"
                subtitle="Confira os dados antes de salvar"
                visible={showModal === MODAL.UPDATE_TRIP}
                onClose={() => setShowModal(MODAL.NONE)}
            >
                <View style={{ marginVertical: 4 }}>

                    <View style={styles.info}>
                        <Text style={styles.infoText}>{Ename}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 16 }}>

                        <View style={[styles.info, { justifyContent: "center", gap: 8 }]}>
                            <CalendarDays color={"black"} size={25} />
                            <Text style={styles.infoText}>{`${Edate.day}/${Edate.month}/${Edate.year}`}</Text>
                        </View>

                        <View style={[styles.info, { justifyContent: "center", gap: 8 }]}>
                            <Clock color={"black"} size={25} />
                            <Text style={styles.infoText}>{Estart}h00</Text>
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

                </View>

            </Modal>


        </View >
    </>

    );
}
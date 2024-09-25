import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync
} from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Search from './Search';
import Topo from './Topo';
import { TouchableOpacity } from 'react-native';
import Texto from '../../../components/texto';
import { GOOGLE_MAPS_API_KEY } from '../../../constants';
import axios from 'axios';
import { styles } from './estilos';

export default function Maps() {

    const [selectedPlace, setSelectedPlace] = useState(null);
    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState([]);

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

    const fetchAddressFromCoordinates = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
            );
            if (response.data.results.length > 0) {
                const addressComponents = response.data.results[0]?.address_components || [];
                const resultado = [
                    latitude,
                    longitude,
                    addressComponents[0]?.long_name,
                    addressComponents[1]?.long_name,
                    addressComponents[2]?.long_name,
                    addressComponents[3]?.long_name,
                    addressComponents[4]?.short_name,
                    addressComponents[5]?.long_name,
                    addressComponents[6]?.long_name
                ].filter(Boolean);
                setAddress(resultado);
            } else {
                setAddress(null);
            }

        } catch (error) {
            console.error(error);
            console.log('Erro ao buscar o endereço');
        }
    };


    useEffect(() => {
        requestLocationPermissions();
    }, []);


    return (<>

        <View style={styles.container}>

            <Topo topo={"Escolha o local"} />

            <Search onCoordenadasChange={handleCoordenadasChange} />

            <View style={styles.containerMapa}>
                {
                    selectedPlace &&
                    <MapView
                        style={styles.map}
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
            </View>

            {marker &&
                <TouchableOpacity

                    style={styles.caixa}
                    onPress={() => {
                        if (marker && marker.latitude !== undefined && marker.longitude !== undefined) {
                            fetchAddressFromCoordinates(marker.latitude, marker.longitude);
                        } else {
                            console.log('Coordenadas não disponíveis');
                        }
                    }}
                >
                    <Texto style={styles.texto}>Adicionar local</Texto>

                </TouchableOpacity>
            }

        </View >
    </>

    );
}
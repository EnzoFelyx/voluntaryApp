import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync
} from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Search from './Search';
import Topo from './Topo';

export default function Maps() {

    const [selectedPlace, setSelectedPlace] = useState(null);
    const [marker, setMarker] = useState(null);

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

        </View >
    </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        flex: 1,
        paddingTop: 40,
    },
    containerMapa: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: '100%',
    },
    titulo: {
        marginTop: 60,
        marginLeft: 24,
        lineHeight: 36,
        fontSize: 24,
        fontWeight: "600",
    },
    topo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    caixa: {
        backgroundColor: "#a6d65e",
        position: "absolute",
        bottom: 100,
        alignSelf: "center",
        borderWidth: 0.5,
        paddingVertical: 16,
        borderRadius: 15,
        paddingHorizontal: 80,

    },
    texto: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    info: {
        flex: 1,
        minHeight: 64,
        maxHeight: 64,
        borderRadius: 15,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2B3137',
        marginTop: 16,
    },
    infoText: {
        flex: 1,
        color: 'white',
        fontSize: 18, //
        fontWeight: '400',
    },
    infoCaixa: {
        flex: 1,
        backgroundColor: "#a6d65e",
        borderWidth: 0.5,
        paddingVertical: 16,
        marginTop: 24,
        marginHorizontal: 24,
        borderRadius: 15,

    },
    checkpoints: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingBottom: 80
    },
    checkpointsLeg: {
        textAlign: "center",
        marginBottom: 24,
        fontSize: 16,
        fontWeight: "800",
        color: "gray",
    },
    imagem: {
        opacity: .6,
        height: 300,
        width: 400,
    }
});

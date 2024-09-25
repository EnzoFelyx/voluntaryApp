import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '../../../constants';
import Icon from '../../../components/Icon';
import { toInputBoxStyles } from './estilos';

export default function Search({ onCoordenadasChange }) {

    const googlePlacesRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleClearInput = () => {
        if (googlePlacesRef.current) {
            googlePlacesRef.current.setAddressText('');
            setInputValue('');
        }
    };

    return (
        <GooglePlacesAutocomplete
            ref={googlePlacesRef}
            fetchDetails={true}
            placeholder='Pesquisar'
            onPress={(data, details = null) => {
                if (details) {
                    const latitude = details.geometry.location.lat ?? 0;
                    const longitude = details.geometry.location.lng ?? 0;

                    const newCoordenadas = {
                        latitude: latitude,
                        longitude: longitude,
                    };

                    if (newCoordenadas.latitude && newCoordenadas.longitude) {
                        onCoordenadasChange(newCoordenadas);
                    } else {
                        console.log("Coordenadas inválidas, função não foi chamada");
                    }
                }
            }}
            query={{
                key: GOOGLE_MAPS_API_KEY,
                language: 'en',
            }}
            styles={toInputBoxStyles}
            onFail={(error) => console.log(error)}
            renderRightButton={() => (
                inputValue.length > 0 && isFocused === true ? (
                    <View
                        style={{ position: 'absolute', right: 0, alignSelf: 'center', marginRight: 16, }}
                    >
                        <Icon styleIcon={{ fontSize: 24 }} cor={"gray"} icone={"close-circle-outline"} acao={handleClearInput} />
                    </View>
                ) : <></>
            )}
            textInputProps={{
                onChangeText: (text) => {
                    setInputValue(text);
                },
                onFocus: () => setIsFocused(true),
                onBlur: () => setIsFocused(false),
                cursorColor: "#DDDDDF"
            }}
        />

    );
}
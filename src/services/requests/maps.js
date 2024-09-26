import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from "../../constants";

export async function pesquisarEndereco(latitude, longitude) {

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
            return resultado
        } else {
            return null
        }

    } catch (error) {
        console.error(error);
        console.log('Erro ao buscar o endereço');
        return error;
    }
};
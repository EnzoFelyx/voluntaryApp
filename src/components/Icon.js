import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function Icon({ familia, icone, interativo = true, cor, acao = null, styleIcon }) {

    const ObterFamiliaIcone = (familia) => {
        switch (familia) {

            case 'Entypo':
                return Entypo;

            case 'Feather':
                return Feather;

            default:
                return MaterialCommunityIcons;
        }
    }

    const FamiliaIcone = ObterFamiliaIcone(familia);

    return <TouchableOpacity disabled={!interativo} onPress={acao} >
        <FamiliaIcone name={icone} style={styleIcon} color={cor} />
    </TouchableOpacity>
}
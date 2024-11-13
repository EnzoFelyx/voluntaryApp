import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Return() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => { navigation.goBack() }}
        >
            <ChevronLeft size={35} color={'gray'} />
        </TouchableOpacity>
    )
}

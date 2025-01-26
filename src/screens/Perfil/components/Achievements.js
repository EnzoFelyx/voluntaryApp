import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useLoading from '../../../hooks/useSkeleton';

export default function Achievements({ Icone, cor, legenda, sub }) {

    const loading = useLoading();

    return (
        <>
            <TouchableOpacity style={[estilos.status, { borderColor: cor, height: 87 }]}>
                {loading ? (<View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator color={'#bbbb'} />
                </View>
                ) : (<>
                    <Icone size={26} color={cor} />
                    <View>
                        <Text style={estilos.statusTitle}>{legenda}</Text>
                        <Text style={[estilos.statusSubt, { color: cor }]}>{sub}</Text>
                    </View>
                </>
                )}
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({

    status: {
        flexDirection: "row",
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 3,
        gap: 8
    },

    statusTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },

    statusSubt: {
        fontSize: 16,
    }
})
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AnimetedView from './Animeted'

const height = Dimensions.get('window').height;

export default function SkeletonEvent() {

    return <View style={{ flex: 1, }}>
        <View style={skeleton.capa}>
            <AnimetedView width={'25%'} length={400} />
        </View>
        <View style={skeleton.legenda}>
            <AnimetedView width={'25%'} length={300} />
        </View>
        <View style={skeleton.owner}>
            <View style={skeleton.pfp}>
                <AnimetedView width={'25%'} length={400} />
            </View>
            <View style={skeleton.nameperson}>
                <AnimetedView width={'25%'} length={400} />
            </View>
        </View>
    </View>
}

const skeleton = StyleSheet.create({
    capa: {
        overflow: "hidden",
        marginTop: 8,
        borderRadius: 15,
        marginRight: 16,
        width: '100%',
        height: height * 0.25,
        backgroundColor: "#DEDFE3",
    },

    legenda: {
        overflow: "hidden",
        backgroundColor: "#DEDFE3",
        borderRadius: 8,
        width: 250,
        height: 20,
        margin: 8,
    },

    owner: {
        flexDirection: "row",
        marginBottom: 16,
        marginTop: 14,
        alignItems: 'center',
        marginLeft: 8,
    },

    pfp: {
        overflow: "hidden",
        backgroundColor: "#DEDFE3",
        height: 32,
        width: 32,
        borderRadius: 25,
    },

    nameperson: {
        overflow: "hidden",
        backgroundColor: "#DEDFE3",
        borderRadius: 8,
        marginLeft: 8,
        marginTop: 4,
        width: 125,
        height: 20,
    }
})
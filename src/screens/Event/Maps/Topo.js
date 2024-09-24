import { StyleSheet, Text, View } from 'react-native';


export default function Topo({ topo }) {

    return (
        <View style={styles.topo}>
            <Text style={styles.titulo}>{topo}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    titulo: {
        fontSize: 24,
        fontWeight: "600",
    },
    topo: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    }
})
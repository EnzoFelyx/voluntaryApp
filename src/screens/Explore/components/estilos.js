import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        borderRadius: 15,
        marginHorizontal: 8,
        paddingTop: 16,
        paddingHorizontal: 8,
        marginVertical: 16,
        backgroundColor: "#FFFF",
    },
    owner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 20
    },
    interaction: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 25
    },
    legenda: {
        paddingHorizontal: 6,
        marginBottom: 12
    }
})
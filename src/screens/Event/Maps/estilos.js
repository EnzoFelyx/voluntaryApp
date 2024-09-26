import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: "#ffff",
        flex: 1,
    },

    titulo: {
        marginTop: 60,
        marginLeft: 24,
        lineHeight: 36,
        fontSize: 24,
        fontWeight: "600",
    },

    caixa: {
        backgroundColor: "#a6d65e",
        position: "absolute",
        bottom: 50,
        alignSelf: "center",
        borderWidth: 0.5,
        borderColor: "gray",
        paddingVertical: 16,
        borderRadius: 15,
        paddingHorizontal: 80,
    },

    textoCaixa: {
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
        backgroundColor: '#f5f5f5',
        marginTop: 16,
    },

    infoText: {
        fontSize: 18, //
        fontWeight: '400',
    },

    endereco: {
        fontSize: 24,
        fontWeight: '700',
        color: "white",
        marginLeft: 8,
        marginTop: 12,
    },

    infoCaixa: {
        flex: 1,
        backgroundColor: "#a6d65e",
        borderWidth: 0.5,
        paddingVertical: 16,
        marginTop: 24,
        marginHorizontal: 24,
        borderRadius: 15,
        alignItems: "center",

    }

});

export const toInputBoxStyles = StyleSheet.create({

    container: {
        flex: 0,
        paddingHorizontal: 10,
        backgroundColor: "#FFFF",
        marginBottom: 16,
    },
    textInput: {
        paddingHorizontal: 16,
        height: 50,
        backgroundColor: "#DDDDDF",
        borderWidth: 0.5,
        borderRadius: 20,
        fontSize: 18,
    },

    TextInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})



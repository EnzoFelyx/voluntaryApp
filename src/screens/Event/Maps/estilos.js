import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        bottom: 50,
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



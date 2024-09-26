import { BlurView } from "expo-blur"
import { X } from "lucide-react-native"
import {
    Modal as RNModal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"


export function Modal({
    title,
    subtitle = "",
    onClose,
    children,
    ...rest
}) {
    return (
        <RNModal transparent animationType="fade" {...rest}>
            <BlurView
                style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "white" }}
                intensity={8}
                tint="light"
                experimentalBlurMethod="dimezisBlurView"
            >
                <View style={estilos.container}>
                    <View style={estilos.box}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 5, }}>
                                <Text style={estilos.titulo}>{title}</Text>

                                {onClose && (
                                    <TouchableOpacity activeOpacity={0.7} onPress={onClose} style={{ marginRight: 8 }}>
                                        <X color="white" size={20} />
                                    </TouchableOpacity>
                                )}
                            </View>

                            {subtitle.trim().length > 0 && (
                                <Text style={{ color: "#CCCCCC", marginTop: 8, marginLeft: 8, }}>
                                    {subtitle}
                                </Text>
                            )
                            }

                            {children}
                        </ScrollView >
                    </View >
                </View >
            </BlurView >
        </RNModal >
    )
}


const estilos = StyleSheet.create({

    container: {
    },
    box: {
        backgroundColor: "gray",
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        borderTopWidth: 1,
        borderColor: "black",
        paddingHorizontal: 6,
        paddingTop: 16,
        paddingBottom: 10
    },
    texto: {
        color: "white",
        fontWeight: "500",
        fontSize: 20,
    },
    titulo: {
        color: "white",
        fontWeight: "500",
        fontSize: 26,
        marginLeft: 8
    }
})


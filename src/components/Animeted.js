import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export default function AnimetedView({ width, length, color = null }) {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startAnimation = () => {
            animatedValue.setValue(0);
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true, // Use Native Driver para melhor desempenho
            }).start(() => {
                setTimeout(startAnimation, 1000);
            });
        };

        startAnimation();

        return () => {
            animatedValue.stopAnimation(); // Para qualquer animação em andamento ao desmontar
        };
    }, [animatedValue]);

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, length],
    });

    return (
        <Animated.View
            style={{
                width: width,
                height: "100%",
                opacity: 0.4,
                backgroundColor: color || "#FFF",
                transform: [{ translateX }],
            }}
        />
    );
}

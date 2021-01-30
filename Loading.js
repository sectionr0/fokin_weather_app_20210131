import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>날씨 정보를 업데이트 중입니다.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 40,
        paddingVertical: 100,

        backgroundColor: "#fdf6aa"

    },
    text: {
        color: "#2c2c2c",
        fontSize: 25,
    }

});
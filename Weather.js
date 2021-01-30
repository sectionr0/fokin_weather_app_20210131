import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "뇌우",
        subtitle: "강한 비(폭풍우, storm)와 천둥(thunder)을 동반한 기상현상을 말한다. 이 현상은 대기가 불안정하여 습한 공기가 국지적으로 급격히 상승하면서 많은 숨은열(latent heat)을 방출할 때 주로 발생한다."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "이슬비",
        subtitle: "하층운의 일종인 층운에서 내리는 경향이 있으며, 보통의 비에 비해 입자가 작아서 느끼기에 보슬보슬, 부슬부슬한 느낌이 난다. 기상 레이더에 잘 잡히지 않는다. 안개가 짙으면 이슬비가 내리기도 한다."
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: "비",
        subtitle: ""
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "눈",
        subtitle: ""
    },
    Atmosphere: {
        iconName: "weather-windy-variant",
        gradient: ["#e1eec3", "#f05053"],
        title: "Atmosphere",
        subtitle: "이건 뭔지 모르겠다"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#22c1c3", "#fdbb2d"],
        title: "맑음",
        subtitle: "햇빛 쨍쨍"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#396afc", "#000C40"],
        title: "구름",
        subtitle: "물이 햇빛에 증발되어 생기는 수증기가 먼지 등의 물질과 응결하여 미세한 물방울이 되어 떠있는 것. 안개와 사실상 성분은 같으며, 지표면과 닿아 있는 것을 안개, 지표면과 떨어져 있는 것을 구름이라고 한다"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#e1eec3", "#f05053"],
        title: "연무",
        subtitle: "습도가 비교적 낮을 때 대기 중에 연기나 먼지와 같은 미세한 입자가 떠 있어 공기가 뿌옇게 보이는 현상을 말한다. 연무가 많이 끼면 시정이 나빠지고 호흡기 질환을 유발 할 수 있다."
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#F0F2F0", "#000C40"],
        title: "안개",
        subtitle: "대기 중의 수증기가 응결하여 지표 가까이에 작은 물방울이 뜬 현상"
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOption[condition].gradient}
            style={styles.container}>

            <StatusBar barStyle="light-content" />

            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons
                    name={weatherOption[condition].iconName || "error"}
                    size={96}
                    color="white" />

                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{ ...styles.halfcontainer, ...styles.textContainer }}>
                <Text style={styles.mainText}>{weatherOption[condition].title}</Text>
                <Text style={styles.subText}>{weatherOption[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mainText: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 30,
        marginLeft: 7,
        marginRight: 5
    },
    subText: {
        fontWeight: "600",
        color: "white",
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});
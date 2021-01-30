import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_WEATHER_KEY = "957210e03128b4442ba7133d78e07e7d";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    console.log(latitude);
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_WEATHER_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: "Clear",
      temp: data.main.temp
    });
    console.log(data);
  };




  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      //console.log({ coords: { latitude, longitude } });
      this.getWeather(latitude, longitude);
      //this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("위치 정보를 찾을 수 없습니다.");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    //console.log(isLoading);
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

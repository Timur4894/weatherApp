import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useCity } from '../context/local-store'; 

const API_KEY = '594ef7a511cdd577a499e8bf61498c70';

interface WeatherData {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
}

function DailyForecast() {
  const [weatherForecast, setWeatherForecast] = useState<WeatherData[]>([]);
  const [weatherTypes, setWeatherTypes] = useState<string[]>([]);
  const { selectedCity } = useCity(); 

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${API_KEY}&units=metric`;

      try {
        const response = await axios.get(API_URL);
        const data = response.data.list.slice(0, 7);

        const types = data.map((forecast: WeatherData) => forecast.weather[0].main);
        setWeatherTypes(types);

        setWeatherForecast(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherForecast();
  }, [selectedCity]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: any = { month: 'short', day: 'numeric', hour: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  };

  const getWeatherImage = (weatherType: string) => {
    switch (weatherType) {
      case 'Clear':
        return require('../constants/icons/free-icon-sun-14838470.png');
      case 'Clouds':
        return require('../constants/icons/free-icon-sun-14838434.png');
      case 'Rain':
        return require('../constants/icons/free-icon-weather-12607703.png');
      case 'Thunderstorm':
        return require('../constants/icons/free-icon-storm-14838448.png');
      default:
        return require('../constants/icons/free-icon-rainbow-14838482.png');
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.icon}>
        <Ionicons name="calendar" size={20} color="white" />
        <Text style={styles.icontext}>Daily forecast</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollinfo}>
          {weatherForecast.map((forecast, index) => (
            <View style={styles.weatherinfo} key={index}>
              <View style={styles.icon}>
                <Text style={styles.infotext}>{formatDate(forecast.dt_txt)} | </Text> 
                <Text style={styles.infotext}>{forecast.main.temp}°C</Text> 
              </View>
              <Image
                style={styles.img}
                source={getWeatherImage(weatherTypes[index])}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  icon: {
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  icontext: {
    color: 'white',
    margin: 2,
    fontWeight: '500',
  },
  infotext: {
    color: 'white',
    fontWeight: '900',
  },
  scrollinfo: {
    flexDirection: 'row',
    marginLeft: -20,
    padding: 20,
  },
  weatherinfo: {
    width: 180,
    height: 80,
    alignItems: 'center',
    backgroundColor: '#a4b3fb39',
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 0,
    borderColor: 'transparent',
  },
});

export default DailyForecast;

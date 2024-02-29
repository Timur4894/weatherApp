import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const API_KEY = '594ef7a511cdd577a499e8bf61498c70'; // Вставьте свой API ключ OpenWeatherMap
const CITY = 'Kyiv'; 

interface WeatherData {
  dt_txt: string;
  main: {
    temp: number;
  };
}

function DailyForecast() {
  const [weatherForecast, setWeatherForecast] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`;

      try {
        const response = await axios.get(API_URL);
        const data = response.data.list.slice(0, 7);
        setWeatherForecast(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherForecast();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: any = { month: 'short', day: 'numeric', hour: 'numeric'};
    return date.toLocaleDateString('en-US', options);
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
                source={require('../constants/icons/free-icon-sun-14838434.png')}
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

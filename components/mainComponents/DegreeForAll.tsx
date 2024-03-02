import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from 'axios';

interface DegreeForAllProps {
  city: string;
}

interface WeatherData {
  main: {
    temp: number;
  };
}

function DegreeForAll({ city }: DegreeForAllProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '594ef7a511cdd577a499e8bf61498c70';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get<WeatherData>(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <View style={styles.root}>
      {weatherData && (
        <View>
          <Text style={styles.text}>
            {weatherData.main.temp}°C
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
    alignItems: 'flex-end',
    marginRight: 20
  },
  text: {
    fontSize: 36,
    fontWeight: '900',
    color: '#05447a',
    
  },
});

export default DegreeForAll;

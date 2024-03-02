import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from 'axios';
import { useCity } from '../../context/local-store'; 

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
}

function Degree() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const { selectedCity } = useCity();

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const apiKey = '594ef7a511cdd577a499e8bf61498c70';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
                const response = await axios.get<WeatherData>(url);
                console.log(response)
                setWeatherData(response.data);
            } catch (error: any) {
                if (error.response && error.response.status === 401) {
                  // Обработка ошибки, если запрос был неудачным из-за ошибки 401 (например, неверный API ключ)
                  console.error('Unauthorized error:', error);
                } else if (error.response && error.response.status === 400) {
                  // Ничего при ошибке 400
                } else {
                  console.error('Error fetching city suggestions:', error);
                }
              }
        };

        fetchData();
    }, [selectedCity]); 

    return (
        <View style={styles.root}>
            {weatherData && (
                <>
                    <View>
                        <Text style={styles.text}>
                            {weatherData.main.temp}°C
                        </Text>
                    </View> 
                    {/* <View>
                        <Text style={styles.smallText}>
                            {weatherData.weather[0].description}
                        </Text>
                    </View> */}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 2,
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        fontSize: 36, 
        fontWeight: '900',
        color: '#05447a'
    },

});

export default Degree;

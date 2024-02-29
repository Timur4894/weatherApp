import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from 'axios';

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
}

function Degree () {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const cityName = 'Kyiv'; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = '594ef7a511cdd577a499e8bf61498c70';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
                const response = await axios.get<WeatherData>(url);
                
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.root}>
            {weatherData && (
                <>
                    <View>
                        <Text style={styles.text}>
                            {weatherData.main.temp}°C
                        </Text>
                    </View> 
                    <View>
                        <Text style={styles.smallText}>
                            {weatherData.weather[0].description}
                        </Text>
                    </View>
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
        fontSize: 25, 
        fontWeight: '900',
        color: 'white'
    },
    smallText: {
        fontSize: 15, 
        fontWeight: '500',
        color: 'white'
    },
});

export default Degree;

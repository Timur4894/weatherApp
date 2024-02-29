import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from 'axios';
import { useCity } from '../context/local-store'; 

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
            } catch (error) {
                console.error('Error fetching data:', error);
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

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import { useCity } from '../../context/local-store'; 


interface WeatherData {
    wind: {
        speed: string;
    };
    sys: {
        sunrise: number;
    };
    clouds: {
        all: number;
    };
}

interface WindData {
    speed: string;
}

interface SunriseData {
    sunrise: number;
}
interface CloudsData {
    all: number;
}

function Details (){
    const [wind, setWind] = useState<WindData | null>(null);
    const [sunRise, setSunRise] = useState<SunriseData | null>(null);
    const [clouds, setClouds] = useState<CloudsData | null>(null);
    //const cityName = 'Kyiv';
    const { selectedCity } = useCity(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = '594ef7a511cdd577a499e8bf61498c70';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
                const response = await axios.get<WeatherData>(url);
                const windData: WindData = {
                    speed: response.data.wind.speed
                };
                const sunriseData: SunriseData = {
                    sunrise: response.data.sys.sunrise
                };
                const cloudsData: CloudsData = {
                    all: response.data.clouds.all
                };
                setWind(windData);
                setSunRise(sunriseData);
                setClouds(cloudsData)
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

    return(
        <View style={styles.root}>
                <View style={styles.iconContainer}>
                    <Ionicons name='balloon' size={24} color='#05447a' style={{marginEnd: 5}}/>
                    <Text style={styles.text}>{wind ? `${wind.speed} km/h` : '-'}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="rainy" size={24} color='#05447a' style={{marginEnd: 5}}/>
                    <Text style={styles.text}>{clouds ? `${clouds.all} %` : '-'}</Text>
                </View>

                <View style={styles.iconContainer}>
                    <Ionicons name="sunny" size={24} color='#05447a' style={{marginEnd: 5}}/>
                    <Text style={styles.text}>{sunRise ? new Date(sunRise.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}</Text>
                </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 17,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    text: {
        fontWeight: 'bold',
        padding: 2,
        color: '#05447a'
    }
})

export default Details;

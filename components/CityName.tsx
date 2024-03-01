import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useCity } from '../context/local-store';
import axios from 'axios';

// Определим интерфейс для данных о городе
interface CityData {
    sys: {
        country: string;
    };
}

function CityName() {
    const { selectedCity } = useCity(); // Получаем выбранный город и страну из контекста
    const [cityData, setCityData] = useState<CityData | null>(null); // Задаем тип для cityData

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = '594ef7a511cdd577a499e8bf61498c70';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
                const response = await axios.get<CityData>(url);
                setCityData(response.data); // Сохраняем данные о городе в состоянии
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedCity]); 

    return (
        <View style={styles.root}>
            <View style={styles.cityBlock}>
                {cityData && ( // Проверяем, что данные о городе загружены
                    <>
                        <Text style={styles.cityName}>{selectedCity}, </Text>
                        <Text style={styles.cityArea}>{cityData.sys.country}</Text>
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    cityName: {
        fontSize: 25, 
        fontWeight: '900',
        color: '#ffffff'
    },
    cityArea: {
        fontSize: 25, 
        color: '#fff',
        fontWeight: '900',
    },
    cityBlock: {
        flexDirection: 'row',
    }
});

export default CityName;

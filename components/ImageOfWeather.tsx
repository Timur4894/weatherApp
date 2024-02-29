import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { useCity } from '../context/local-store';

function ImageOfWeather() {
    const { selectedCity } = useCity();
    const [weatherType, setWeatherType] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = '594ef7a511cdd577a499e8bf61498c70';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
                const response = await axios.get(url);
                const weatherData = response.data.weather[0].main; // Получаем тип погоды из данных
                setWeatherType(weatherData); // Сохраняем тип погоды в состоянии
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedCity]);

    // Функция, которая возвращает путь к изображению в зависимости от типа погоды
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
                return require('../constants/icons/free-icon-rainbow-14838482.png'); // Заглушка по умолчанию
        }
    };

    return (
        <View style={styles.root}>
            <Image
                style={styles.icon}
                source={getWeatherImage(weatherType)}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 3,
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '100%',
    },
});

export default ImageOfWeather;

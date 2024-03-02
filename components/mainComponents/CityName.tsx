import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable,TouchableOpacity } from "react-native";
import { useCity } from '../../context/local-store';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useFavoriteCities } from '../../context/FavoriteCitiesContext';

// Определим интерфейс для данных о городе
interface CityData {
    sys: {
        country: string;
    };
}
function CityName() {
    const { selectedCity } = useCity();
    const [cityData, setCityData] = useState<CityData | null>(null);
    const { addFavoriteCity, removeFavoriteCity, favoriteCities } = useFavoriteCities();


    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = '594ef7a511cdd577a499e8bf61498c70';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
                const response = await axios.get<CityData>(url);
                setCityData(response.data);
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

    const handleToggleFavorite = (city: string) => {
        if (favoriteCities.includes(city)) {
          removeFavoriteCity(city);
        } else {
          addFavoriteCity(city);
        }
      };


    return (
        <View style={styles.root}>
            <View style={styles.cityBlock}>
            
                {cityData && (
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.cityName}>{selectedCity}, </Text>
                        <Text style={styles.cityArea}>{cityData.sys.country}</Text>
                    </View>
                )}
                <View style={{marginLeft: 20}}>
                <TouchableOpacity onPress={() => handleToggleFavorite(selectedCity)}>
                    <Ionicons
                        name={favoriteCities.includes(selectedCity) ? "star" : "star-outline"}
                        size={32}
                        color={favoriteCities.includes(selectedCity) ? "yellow" : "gray"}
                    />
                </TouchableOpacity> 
                </View>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 50
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
        alignItems: 'center',
    },

});

export default CityName;

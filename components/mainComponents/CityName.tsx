import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useCity } from '../../context/local-store';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useFavoriteCities } from '../../context/FavoriteCitiesContext';
import { storeCity, deleteCity } from "../../utils/http";
import { AuthContext } from "../../context/auth-context";

interface CityData {
    sys: {
        country: string;
    };
}


function CityName() {

    const { selectedCity } = useCity();
    const [cityData, setCityData] = useState<CityData | null>(null);
    const { addFavoriteCity, removeFavoriteCity, favoriteCities } = useFavoriteCities();
    const [cityId, setCityId] = useState(null); 
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = '594ef7a511cdd577a499e8bf61498c70';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
                const response = await axios.get<CityData>(url);
                setCityData(response.data);
            } catch (error: any) {
                if (error.response && error.response.status === 401) {
                  console.error('Unauthorized error:', error);
                } else if (error.response && error.response.status === 400) {
                } else {
                  console.error('Error fetching city suggestions:', error);
                }
              }
        };

        fetchData();
    }, [selectedCity]);


    console.log(token)
    const handleToggleFavorite = (city: string) => {
        if (favoriteCities.includes(city)) {
          removeFavoriteCity(city);
          handleDeleteCity()
        } else {
          addFavoriteCity(city);
          handleStoreCity()
        }
    };


    const handleStoreCity = async () => {
        try {
            const ig = await storeCity({ token, city: { name: selectedCity } });
            setCityId(ig)
        } catch (error) {
            console.error("Error storing city:", error);
        }
    };

    

    const handleDeleteCity = async () => {
        try {
            await deleteCity({ id: cityId,  token });
            console.log("City deleted successfully");
        } catch (error) {
            console.error("Error deleting city:", error);
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
        marginLeft: 50,
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

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useCity } from '../context/local-store'; 

function Search() {
  const { selectedCity, setSelectedCity } = useCity(); 

  const [nameOfTheCity, setNameOfTheCity] = useState<string>('');
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);

  const handleSearch = async (value: string) => {
    setNameOfTheCity(value);

    try {
      const apiKey = '594ef7a511cdd577a499e8bf61498c70';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${apiKey}`);
      const cities = response.data.list.map((city: { name: string }) => city.name);
      setCitySuggestions(cities);
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
    }
  };

  const handleSelectCity = (city: string) => {
    setSelectedCity(city); 
    setNameOfTheCity(city);
    setCitySuggestions([]);
  };
  console.log(selectedCity)

  const renderCityItem = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => handleSelectCity(item)}>
      <Text style={styles.cityItem}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          onChangeText={handleSearch}
          value={nameOfTheCity}
          placeholder="Search"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
      {citySuggestions.length > 0 && (
        <FlatList
          data={citySuggestions}
          renderItem={renderCityItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.suggestionsContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    marginTop: '13%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0d1',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: '#f0f0f0d1',
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: '#dfdfdfda',
    borderRadius: 13,
    elevation: 3,
  },
  cityItem: {
    padding: 12,
  },
});

export default Search;

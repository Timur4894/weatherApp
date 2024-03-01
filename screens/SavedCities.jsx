import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFavoriteCities } from '../context/FavoriteCitiesContext';

function SavedCities() {
  const { favoriteCities } = useFavoriteCities();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Cities</Text>
      <FlatList
        data={favoriteCities}
        renderItem={({ item }) => <Text style={styles.city}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  city: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default SavedCities;

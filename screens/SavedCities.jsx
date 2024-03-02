import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { useFavoriteCities } from '../context/FavoriteCitiesContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function SavedCities() {
  const { favoriteCities } = useFavoriteCities();
  const navigation = useNavigation();

  const image = { uri: 'https://img.freepik.com/free-vector/simple-gradient-background-vector-winter-blue_53876-105767.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1708387200&semt=ais' };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.icon} onPress={() => navigation.navigate('MainScreen')}>
            <Ionicons name='arrow-back' size={34} color="black" />
          </Pressable>
        </View>
        <Text style={styles.headerText}>Weather</Text>

        <View style={styles.contentContainer}>
          <FlatList
            data={favoriteCities}
            renderItem={({ item }) => (
              <View style={styles.cityContainer}>
                <Text style={styles.city}>{item}</Text>
                <Text style={styles.city}>17°C</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 30,
  },
  cityContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#3891de47',
    borderColor: '#003b6f46',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  city: {
    fontSize: 28,
    marginRight: 20,
    marginLeft: 20,
    fontWeight: '600'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -41,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default SavedCities;

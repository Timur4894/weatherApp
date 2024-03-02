import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { useFavoriteCities } from '../context/FavoriteCitiesContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DegreeForAll from '../components/mainComponents/DegreeForAll'; // Импортируем компонент с температурой

function SavedCities() {
  const { favoriteCities } = useFavoriteCities();
  const navigation = useNavigation();

  const image = {uri: 'https://media.istockphoto.com/id/184103864/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%BD%D0%B5%D0%B1%D0%B5.jpg?s=612x612&w=0&k=20&c=BxXc6oDcATVxnS_tQsWRdfy6QCKRExJbl54FOfcbWrg='};

  return (
    <>
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
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.innerCityContainer}>
                  <Text style={styles.city}>{item}</Text>
                  <DegreeForAll city={item}/> 
                </View>

                </ImageBackground>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  innerCityContainer: {
    flex: 1,
    backgroundColor: '#3891de47',
    borderColor: '#003b6f46',
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 30,
  },
  cityContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#3891de47',
    borderColor: '#003b6f46',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden', 
  },
  city: {
    fontSize: 38,
    marginLeft: 10,
    fontWeight: '600',
    color: '#05447a'
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
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});

export default SavedCities;

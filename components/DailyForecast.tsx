import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function DailyForecast() {
  return (
    <View style={styles.root}>
      <View style={styles.icon}>
        <Ionicons name="calendar" size={20} color="white" />
        <Text style={styles.icontext}>Daily forecast</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollinfo}>
          <View style={styles.weatherinfo}>
            <Text style={styles.infotext}>Monday</Text>
            <Image
                    style={styles.img}
                    source={require('../constants/icons/free-icon-sun-14838434.png')}
                    resizeMode="contain"
                />    
          </View>

          <View style={styles.weatherinfo}>
            <Text style={styles.infotext}>Tuesday</Text>
            <Image
                    style={styles.img}
                    source={require('../constants/icons/free-icon-sun-14838434.png')}
                    resizeMode="contain"
                />  
          </View>

          <View style={styles.weatherinfo}>
            <Text style={styles.infotext}>Wednesday</Text>
            <Image
                    style={styles.img}
                    source={require('../constants/icons/free-icon-sun-14838434.png')}
                    resizeMode="contain"
                />  
          </View>

          <View style={styles.weatherinfo}>
            <Text style={styles.infotext}>Thursday</Text>
            <Image
                    style={styles.img}
                    source={require('../constants/icons/free-icon-sun-14838434.png')}
                    resizeMode="contain"
                />  
          </View>

          <View style={styles.weatherinfo}>
            <Text style={styles.infotext}>Friday</Text>
            <Image
                    style={styles.img}
                    source={require('../constants/icons/free-icon-sun-14838434.png')}
                    resizeMode="contain"
                />  
          </View>

          <View style={styles.weatherinfo}>
            <Text style={styles.infotext}>Saturday</Text>
            <Image
                    style={styles.img}
                    source={require('../constants/icons/free-icon-sun-14838434.png')}
                    resizeMode="contain"
                />  
          </View>

          <View style={styles.weatherinfo}>
            <Text style={styles.infotext}>Sunday</Text>
            <Image
                    style={styles.img}
                    source={require('../constants/icons/free-icon-sun-14838434.png')}
                    resizeMode="contain"
                />  
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  icon: {
    flexDirection: "row",
  },
  img: {
    width: '100%',
    height: '100%',
  },
  icontext: {
    color: "white",
    margin: 2,
    fontWeight: "500",
  },
  infotext: {
    color: "white",
    fontWeight: "900",
  },
  scrollinfo: {
    flexDirection: "row",
    padding: 20,
  },
  weatherinfo: {
    width: 120, 
    height: 70, 
    alignItems: 'center',
    backgroundColor: "#a4b3fb39",
    borderRadius: 15,
    marginRight: 10, 
    borderWidth: 0, // Убираем рамку
    borderColor: 'transparent', // Убираем цвет рамки
  },
});

export default DailyForecast;

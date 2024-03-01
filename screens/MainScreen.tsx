import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CityName from "../components/CityName";
import Search from "../components/Search";
import ImageOfWeather from "../components/ImageOfWeather";
import Details from "../components/Details";
import Degree from "../components/Degree";
import DailyForecast from "../components/DailyForecast";

const image = {uri: 'https://img.freepik.com/free-vector/simple-gradient-background-vector-winter-blue_53876-105767.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1708387200&semt=ais'};

function MainScreen (){
    return(
            <View style={styles.root}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Search/>
                    <CityName/>
                    <ImageOfWeather/>
                    <Degree/>
                    <Details/>
                    <DailyForecast/>
                </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 2,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        
    }
})

export default MainScreen
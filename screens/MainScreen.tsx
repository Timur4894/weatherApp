import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CityName from "../components/CityName";
import Search from "../components/Search";
import ImageOfWeather from "../components/ImageOfWeather";
import Details from "../components/Details";
import Degree from "../components/Degree";
import DailyForecast from "../components/DailyForecast";

const image = {uri: 'https://static.vecteezy.com/system/resources/previews/008/842/741/original/blue-social-media-duotone-gradient-background-social-network-stories-soft-colorful-theme-navy-graphic-display-wallpaper-modern-vibrant-mobile-app-design-blending-bright-duo-colors-template-vector.jpg'};

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
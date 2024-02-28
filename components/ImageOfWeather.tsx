import { View, Text, StyleSheet, Image } from "react-native";

function ImageOfWeather (){
    return(
            <View style={styles.root}>
                <Image
                    style={styles.icon}
                    source={require('../constants/icons/free-icon-storm-14838448.png')}
                    resizeMode="contain"
                />         
            </View>

    )
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
    
})

export default ImageOfWeather
import { View, Text, StyleSheet, ImageBackground } from "react-native";
function CityName (){
    return(
            <View style={styles.root}>
                <View style={styles.cityBlock}>
                    <Text style={styles.cityName}>London,</Text>
                    <Text style={styles.cityArea}>United Kingdom</Text>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    cityName: {
      fontSize: 25, 
      fontWeight: '900',
      color: 'white'
    },
    cityArea: {
        fontSize: 25, 
        color: 'white'
    },
    cityBlock: {
      flexDirection: 'row',
    }

    
})

export default CityName
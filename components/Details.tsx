import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";


function Details (){
    return(
        <View style={styles.root}>
                <View style={styles.iconContainer}>
                    <Ionicons name='balloon' size={24} color='white'/>
                    <Text style={styles.text}>22km</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="rainy" size={24} color='white'/>
                    <Text style={styles.text}>17%</Text>
                </View>

                <View style={styles.iconContainer}>
                    <Ionicons name="sunny" size={24} color='white'/>
                    <Text style={styles.text}>6:09am</Text>
                </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 17,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    text: {
        fontWeight: 'bold',
        padding: 2,
        color: 'white'
    }
})

export default Details;

import { View, Text, StyleSheet, Image } from "react-native";

function Degree (){
    return(
            <View style={styles.root}>
                <View>
                    <Text style={styles.text}>
                        19°C
                    </Text>
                </View> 
                <View>
                    <Text style={styles.smaltext}>
                        Partly cloudy
                    </Text>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    root: {
        flex: 2,
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        fontSize: 25, 
        fontWeight: '900',
        color: 'white'
    },
    smaltext: {
        fontSize: 15, 
        fontWeight: '500',
        color: 'white'
    },

    
})

export default Degree
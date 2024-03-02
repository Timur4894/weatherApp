import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useCity } from '../../context/local-store';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


function More() {
    const navigation = useNavigation();


    return (
        <View style={styles.root}>
            <View>
                <Pressable onPress={() => navigation.navigate('SavedCities')}>
                    <Ionicons name='menu-sharp' size={38} color="white" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        marginRight: 300,
        marginTop: -75
    },

});

export default More;




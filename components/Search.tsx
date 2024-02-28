import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search() {

  const handleSearch = (value: string) => {
    console.log('value: ', value)
  }

  return (
    <View style={styles.root}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          onChangeText={handleSearch}
          placeholder="Search"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: "center",
      marginTop: "13%",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f0f0f0d1",
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 2,
      borderColor: "#f0f0f0d1",
      marginHorizontal: 10, 
    },
    icon: {
      marginRight: 5,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: "black",
    },
  });
  

export default Search;

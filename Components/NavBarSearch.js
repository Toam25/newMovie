import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavbarSearch() {
  const [searchedText, setSearchedText] = useState("");
  const navigation = useNavigation();

  return (
    <TextInput
      style={styles.textinput}
      placeholder="Rechercher votre film ici"
      onChangeText={(text) => setSearchedText(text)}
      onSubmitEditing={() => {
        if (searchedText.trim() !== "")
          navigation.navigate("Search", { text: searchedText });
      }}
    />
  );
}
const styles = StyleSheet.create({
  textinput: {
    backgroundColor: "white",
    color: "white",
    padding: 5,
    borderRadius: 20,
    color: "#0c0013",
  },
});

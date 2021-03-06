import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function GenreFilmItem(props) {
  const genres = props.genres;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("List", { id: genres.id, name: genres.name })
      }
    >
      <Text style={styles.title} numberOfLines={6}>
        {genres.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: "white",
    fontSize: 15,
    zIndex: 1,
    flexWrap: "nowrap",
    textAlignVertical: "center",
    textAlign: "center",
  },

  container: {
    flex: 1,
    width: 100,
    height: 50,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "rgba(255,255, 255, 0.05)",
  },
});

export default GenreFilmItem;

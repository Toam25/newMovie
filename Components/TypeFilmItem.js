import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getImageFilm } from "../API/TMDBApi";
function TypeFilmItem(props) {
  const film = props.films;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { detailfilm: film })}
    >
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: getImageFilm(film.poster_path) }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 20,
    zIndex: 1,
    textAlignVertical: "center",
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: 150,
    flex: 1,
    width: 100,
    margin: 5,
    backgroundColor: "#3c0011",
    borderRadius: 5,
  },
});

export default TypeFilmItem;

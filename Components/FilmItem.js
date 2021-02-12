import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import { getImageFilm } from "../API/TMDBApi";
import { useNavigation } from "@react-navigation/native";

export default function FilmItem(props) {
  const film = props.film;
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
      <View style={styles.app}>
        <Text style={styles.title} numberOfLines={6}>
          {film.title}
        </Text>
        <Text style={styles.date}>{film.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 2,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  date: {
    fontSize: 12,
  },
  container: {
    height: 300,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    margin: "2%",
    width: "46%",
    backgroundColor: "#990099",
  },
  app: {
    flex: 1,
    margin: 5,
  },
});

import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import { getImageFilm } from "../API/TMDBApi";
import { useNavigation } from "@react-navigation/native";
import FadeInView from "../Components/animation/fadeInView";

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
        <Text style={styles.title} numberOfLines={2}>
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
    color: "#0c0013",
    fontSize: 15,
  },
  date: {
    fontSize: 12,
    color: "#909090",
  },
  container: {
    height: 200,
    borderRadius: 5,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    margin: "2%",
    width: "46%",
    backgroundColor: "white",
    borderColor: "white",
  },
  app: {
    flex: 1,
    margin: 5,
  },
});

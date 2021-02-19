import React from "react";
import Home from "../Components/Home";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  BackHandler,
} from "react-native";
import { getImageFilm } from "../API/TMDBApi";
export default function DetailScreen(props) {
  const film = props.route.params.detailfilm;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container_image}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: getImageFilm(film.backdrop_path) }}
        />
      </View>
      <View style={styles.container_image_cover}>
        <View style={styles._container_image_cover}>
          <Text style={styles.vote_average}>{film.vote_count}</Text>
          <Image
            resizeMode="cover"
            style={styles.image_cover}
            source={{ uri: getImageFilm(film.poster_path) }}
          />
          <Text style={styles.vote_average}>{film.vote_average}</Text>
        </View>
        <View style={styles.container_des}>
          <Text style={styles.title}>{film.title}</Text>
          <Text>
            <Text style={styles.bold}>Titre original : </Text>
            {film.original_title}
          </Text>
          <Text>
            <Text style={styles.bold}>Votes moyenne : </Text>
            {film.vote_average}
          </Text>
          <Text>
            <Text style={styles.bold}>Décompte des votes : </Text>
            {film.vote_count}
          </Text>
          <Text>
            <Text style={styles.bold}>Date de sortie : </Text>
            {film.release_date}
          </Text>
          <Text>
            <Text style={styles.bold}>Déscription : </Text>
            {film.overview}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 400,
  },
  container_des: {
    padding: 6,
    flex: 1,
    width: Dimensions.get("window").width,
  },
  _container_image_cover: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  vote_average: {
    color: "white",
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10,
  },
  container_image_cover: {
    top: -100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image_cover: {
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  container_image: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#990099",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
});

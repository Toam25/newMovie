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
      <View style={styles.app}>
        <Text style={styles.title} numberOfLines={6}>
          {genres.name}
        </Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/film.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: "#990099",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 2,
  },
  container: {
    height: 150,
    borderRadius: 5,
    shadowColor: "#81006e",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    margin: "2%",
    width: "46%",
    //backgroundColor: "#990099",
  },
  app: {
    flex: 1,
    margin: 5,
    color: "white",
  },
});

export default GenreFilmItem;

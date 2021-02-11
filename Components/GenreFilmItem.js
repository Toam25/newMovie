import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function GenreFilmItem(props) {
  const genres = props.genres;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("List", { id: genres.id })}
    >
      <View style={styles.app}>
        <Text style={styles.title} numberOfLines={6}>
          {genres.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    height: 150,
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
    backgroundColor: "#92302d",
  },
  app: {
    flex: 1,
    margin: 5,
  },
});

export default GenreFilmItem;

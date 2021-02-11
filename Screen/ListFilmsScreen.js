import React from "react";

import { View, Text } from "react-native";
import getAllMoviePerGenre from "../API/TMDBApi";

export default function ListFilmScreen({ route }) {
  console.log(route);
  const id = route.params.id;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen {id}</Text>
    </View>
  );
}

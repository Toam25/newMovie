import React, { useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import FilmItem from "../Components/FilmItem";

import { getAllMoviePerGenre } from "../API/TMDBApi";

class ListFilmScreen extends React.Component {
  constructor(props) {
    super(props);
    const { route } = props;
    this.state = {
      films: [],
      isLoading: true,
    };
    this.id = route.params.id;
    this.page = 0;
    this.totalPages = 0;
  }

  _loadFilms() {
    this.setState({
      isLoading: true,
    });

    if (this.page < this.page + 1)
      getAllMoviePerGenre(this.id, this.page + 1).then((data) => {
        this.page = data.page;
        this.totalPages = data.total_pages;

        this.setState({
          films: [...this.state.films, ...data.results],
          isLoading: false,
        });
      });
  }
  componentDidMount() {
    this._loadFilms();
  }
  _loading() {
    if (this.state.isLoading)
      return (
        <View style={styles.indicator}>
          <Text style={styles.indicator_text}>En attente des résults ...</Text>
        </View>
      );
  }
  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.state.films}
          numColumns={2}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.state.films.length > 0 && this.page < this.totalPages)
              this._loadFilms();
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
        {this._loading()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#0c0011",
    margin: 0,
  },
  indicator_text: {
    backgroundColor: "#990099",
    color: "white",
    padding: 5,
    borderRadius: 20,
  },
  indicator: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
});
export default ListFilmScreen;

import React, { useState } from "react";

import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
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
    getAllMoviePerGenre(this.id, this.page + 1).then((data) => {
      this.page = data.page;
      this.totalPages = data.total_pages;
      console.log(data);
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
          <ActivityIndicator size="large" />
        </View>
      );
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.films}
          numColumns={2}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
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
  indicator: {
    position: "fixed",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
});
export default ListFilmScreen;

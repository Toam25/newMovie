import React, { useState } from "react";

import { View, FlatList } from "react-native";
import FilmItem from "../Components/FilmItem";

import { getAllMoviePerGenre } from "../API/TMDBApi";

class ListFilmScreen extends React.Component {
  constructor(props) {
    super(props);
    const { route } = props;
    this.state = {
      films: [],
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
      });
    });
  }
  componentDidMount() {
    this._loadFilms();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.films}
          numColumns={2}
          onEndReachedThreshold={0.5}
          /*onEndReached={() => {
            this._loadFilms();
          }}*/
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    );
  }
}

export default ListFilmScreen;

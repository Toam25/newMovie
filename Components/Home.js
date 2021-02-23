import React from "react";
import GenreFilmItem from "./GenreFilmItem";
import { getGenre } from "../API/TMDBApi";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: [],
      isLoading: true,
    };
    this.text = "";
    this.page = 0;
    this.totalPages = 0;
    this.serchedText = "";
  }

  _loadGenreFilms() {
    getGenre().then((data) => {
      this.setState({
        genre: data.genres,
        isLoading: false,
      });
    });
  }
  componentDidMount() {
    this._loadGenreFilms();
    this.setState({
      isLoading: true,
    });
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
          data={this.state.genre}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GenreFilmItem genres={item} />}
        />
        {this._loading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  genre: {
    textAlign: "center",
    fontSize: 30,
    color: "#990099",
  },
  container_search: {
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 5,
    margin: 6,
    top: 3,
    zIndex: 9,
  },
  main_container: {
    flex: 1,
    backgroundColor: "#550011",
  },
  text_search: {
    padding: 6,
  },
  flatlist: {
    flex: 1,
    justifyContent: "space-between",
  },
});
export default Home;

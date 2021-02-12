import React from "react";
import GenreFilmItem from "./GenreFilmItem";
import { getGenre } from "../API/TMDBApi";
import { StyleSheet, View, FlatList, Button } from "react-native";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: [],
      isLoading: false,
    };
    this.text = "";
    this.page = 0;
    this.totalPages = 0;
    this.serchedText = "";
  }

  _loadGenreFilms() {
    this.setState({
      isLoading: true,
    });
    getGenre().then((data) => {
      this.setState({
        genre: data.genres,
      });
    });
  }
  componentDidMount() {
    this._loadGenreFilms();
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

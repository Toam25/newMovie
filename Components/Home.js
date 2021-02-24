import React from "react";
import GenreFilmItem from "./GenreFilmItem";
import TypeFilmItem from "./TypeFilmItem";
import {
  getGenre,
  getLatestfilms,
  getDiscoverFilm,
  getPopularFilm,
  getTopRatedFilm,
  getUnComing,
} from "../API/TMDBApi";
import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: [],
      popular: [],
      decouvrir: [],
      meilleurVote: [],
      dernierfilms: [],
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
  _loadUnComingFilm() {
    getUnComing().then((data) => {
      this.setState({
        popular: data.results,
        isLoading: false,
      });
    });
  }
  _loadDecouvrirFilms() {
    getDiscoverFilm().then((data) => {
      this.setState({
        decouvrir: data.results,
        isLoading: false,
      });
    });
  }
  _loadTopVoteFilms() {
    getTopRatedFilm().then((data) => {
      this.setState({
        meilleurVote: data.results,
        isLoading: false,
      });
    });
  }
  _loadDernierFilm() {
    getLatestfilms().then((data) => {
      this.setState({
        dernierfilms: data.results,
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    this._loadGenreFilms();
    this._loadDecouvrirFilms();
    this._loadDernierFilm();
    this._loadTopVoteFilms();
    this._loadUnComingFilm();
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
      <ScrollView style={styles.main_container}>
        <View>
          <FlatList
            data={this.state.genre}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <GenreFilmItem genres={item} />}
          />
        </View>

        <View style={styles.containt_ech}>
          <Text style={styles.title}>Decouvrir</Text>
          <FlatList
            data={this.state.decouvrir}
            horizontal={true}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (
                this.state.dernierfilms.length > 0 &&
                this.page < this.totalPages
              )
                this._loadDecouvrirFilms();
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TypeFilmItem films={item} />}
          />
        </View>

        <View style={styles.containt_ech}>
          <Text style={styles.title}>Prochainement</Text>
          <FlatList
            data={this.state.popular}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (this.state.popular.length > 0 && this.page < this.totalPages)
                this._loadUnComingFilm();
            }}
            renderItem={({ item }) => <TypeFilmItem films={item} />}
          />
        </View>

        <View style={styles.containt_ech}>
          <Text style={styles.title}>Dernier film </Text>
          <FlatList
            data={this.state.dernierfilms}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (
                this.state.dernierfilms.length > 0 &&
                this.page < this.totalPages
              )
                this._loadDernierFilm();
            }}
            renderItem={({ item }) => <TypeFilmItem films={item} />}
          />
        </View>
        <View style={styles.containt_ech}>
          <Text style={styles.title}>Meilleur vote </Text>
          <FlatList
            data={this.state.meilleurVote}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (
                this.state.meilleurVote.length > 0 &&
                this.page < this.totalPages
              )
                this._loadTopVoteFilms();
            }}
            renderItem={({ item }) => <TypeFilmItem films={item} />}
          />
        </View>
        {this._loading()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  indicator_text: {
    backgroundColor: "#0c0011",
    color: "white",
    padding: 5,
    borderRadius: 20,
  },
  containt_ech: {
    marginTop: 10,
    height: 200,
  },
  title: {
    color: "white",
    fontSize: 18,
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
    backgroundColor: "#0c0011",
    margin: 0,
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

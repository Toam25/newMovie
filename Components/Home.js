import React from "react";
import GenreFilmItem from "./GenreFilmItem";
import TypeFilmItem from "./TypeFilmItem";
import {
  getGenre,
  getLatestfilms,
  getDiscoverFilm,
  getTopRatedFilm,
  getUnComing,
} from "../API/TMDBApi";
import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: [],
      uncoming: [],
      decouvrir: [],
      meilleurVote: [],
      dernierfilms: [],
      isLoading: true,
    };
    this.text = "";
    this.page = 0;

    this.pageDecouvrir = 0;
    this.totalPagesDecouvrir = 0;

    this.pageUncomming = 0;
    this.totalPagesUncomming = 0;

    this.pageTopVote = 0;
    this.totalPagesVote = 0;

    this.dernierFilm = 0;
    this.totalPagesDernierFilm = 0;

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
    getUnComing(this.pageUncomming + 1).then((data) => {
      this.pageUncomming = data.page;
      this.totalPagesUncomming = data.total_pages;
      this.setState({
        uncoming: data.results,
        isLoading: false,
      });
    });
  }
  _loadDecouvrirFilms() {
    getDiscoverFilm(this.pageDecouvrir + 1).then((data) => {
      this.pageDecouvrir = data.page;
      this.totalPages = data.total_pages;
      this.setState({
        decouvrir: [...this.state.decouvrir, ...data.results],
        isLoading: false,
      });
    });
  }
  _loadTopVoteFilms() {
    getTopRatedFilm(this.pageTopVote + 1).then((data) => {
      this.pageTopVote = data.page;
      this.totalPagesVote = data.total_pages;
      this.setState({
        meilleurVote: [...this.state.meilleurVote, ...data.results],
        isLoading: false,
      });
    });
  }
  _loadDernierFilm() {
    getLatestfilms(this.dernierFilm + 1).then((data) => {
      this.dernierFilm = data.page;
      this.totalPagesDernierFilm = data.total_pages;
      this.setState({
        dernierfilms: [...this.state.dernierfilms, ...data.results],
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
        {this._loading()}
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
                this.state.decouvrir.length > 0 &&
                this.decouvrir < this.totalPagesDecouvrir
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
            data={this.state.uncoming}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (
                this.state.uncoming.length > 0 &&
                this.pageUncomming < this.totalPagesUncomming
              )
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
                this.dernierfilms < this.totalPagesDernierFilm
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
                this.pageTopVote < this.totalPagesVote
              )
                this._loadTopVoteFilms();
            }}
            renderItem={({ item }) => <TypeFilmItem films={item} />}
          />
        </View>
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

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { getVideo } from "../API/TMDBApi";
export default class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.route.params.detailfilm.id;
    this.title = props.route.params.detailfilm.title;
    this.state = {
      key: "",
      site: "",
      isLoading: true,
      undiponibleVideo: false,
    };
  }
  _getVideo() {
    getVideo(this.id).then((data) => {
      if (data.results.length) {
        this.setState({
          key: data.results[0].key,
          site: data.results[0].site,
          isLoading: false,
        });
      } else {
        getVideo(this.id, "en-EN").then((data) => {
          if (data.results.length) {
            this.setState({
              key: data.results[0].key,
              site: data.results[0].site,
              isLoading: false,
            });
          } else {
            this.setState({
              undiponibleVideo: true,
              isLoading: false,
            });
          }
        });
      }
    });
  }
  _loading() {
    if (this.state.isLoading)
      return (
        <View style={styles.indicator}>
          <Text style={styles.indicator_text}>En attente ...</Text>
        </View>
      );
  }

  _undiponibleVideo() {
    if (this.state.undiponibleVideo) {
      return (
        <View style={styles.cundv}>
          <Text style={styles.undiponibleVideo}>
            video n'est pas disponible
          </Text>
        </View>
      );
    }
  }
  _video() {
    if (this.state.site == "YouTube") {
      return (
        <WebView
          source={{ uri: "https://www.youtube.com/embed/" + this.state.key }}
          style={styles.video}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      );
    }
  }
  componentDidMount() {
    this._getVideo();
    this.setState({
      isLoading: true,
      undiponibleVideo: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.title}</Text>
        {this._video()}
        {this._undiponibleVideo()}
        {this._loading()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0c0011",
  },
  cundv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  undiponibleVideo: {
    fontSize: 18,
    color: "white",
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  video: {
    marginTop: 20,

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
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

import React from "react";
import { getPopularFilm, getImageFilm } from "../API/TMDBApi";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: true,
      activeIndex: 0,
      carouselItems: [],
    };
    this.text = "";
    this.page = 0;
    this.totalCurentPage = 20;
    this.totalPages = 0;
  }

  _getPopularfilm() {
    getPopularFilm(this.page + 1).then((data) => {
      this.setState({
        carouselItems: [...this.state.carouselItems, ...data.results],
      });
      this.page = data.page;
      this.totalPages = data.total_results;
      this.totalCurentPage = this.totalCurentPage + 20;
    });
  }
  componentDidMount() {
    this._getPopularfilm();
  }
  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderBottomColor: "black",
        }}
      >
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: getImageFilm(item.poster_path) }}
        />
      </View>
    );
  }
  render() {
    return (
      <Carousel
        layout={"tinder"}
        loop={true}
        autoplay={true}
        ref={(ref) => (this.carousel = ref)}
        data={this.state.carouselItems}
        sliderWidth={Dimensions.get("window").width}
        sliderHeight={Dimensions.get("window").height}
        itemWidth={Dimensions.get("window").width}
        renderItem={this._renderItem}
        onSnapToItem={(index) => {
          this.setState({ activeIndex: index });
        }}
      />
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
  image: {
    height: 150,
  },
  title: {
    height: 50,
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
});

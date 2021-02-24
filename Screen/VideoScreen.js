import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import { getVideo } from "../API/TMDBApi";
export default class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.route.params.detailfilm.id;
  }

  render() {
    console.log(this.id);
    return (
      <View>
        <Text>Biento disponible</Text>
      </View>
    );
  }
}

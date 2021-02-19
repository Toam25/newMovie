import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
export default function VideoItem(props) {
  return (
    <View>
      <WebView
        source={{
          uri: "https://github.com/facebook/react-native",
        }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

import React from "react";
import { StyleSheet, View, Linking, Text } from "react-native";
class MeScreen extends React.Component {
  _goToURL() {
    const fburl = "https://www.facebook.com/profile.php?id=100009705455259";
    Linking.canOpenURL(fburl).then((supported) => {
      if (supported) {
        Linking.openURL(fburl);
      } else {
        console.log("Don't know how to open URI: " + fburl);
      }
    });
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.text}>
          Application dévélopper par Rakotoarimanana Rado Nirina, contactez-moi
          sur{" "}
          <Text style={styles.title} onPress={this._goToURL}>
            facebook
          </Text>{" "}
          ou laisse un message sur mon addresse mail{" "}
          <Text style={styles.title}>toarymanana@gmail.com</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#5f5bff",
    fontWeight: "bold",
  },
  text: {
    color: "white",
  },
  main_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0c0011",
  },
});
export default MeScreen;

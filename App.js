import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screen/HomeScreen";
import ListFilmScreen from "./Screen/ListFilmsScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListFilmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'

export default function App() {
  return (
   
      <Search />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

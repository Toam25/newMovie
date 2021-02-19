import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Screen/HomeScreen";
import ListFilmScreen from "./Screen/ListFilmsScreen";
import DetailScreen from "./Screen/DetailScreens";
import SearchItem from "./Components/SearchItem";
import NavbarSearch from "./Components/NavBarSearch";
import MeScreen from "./Screen/MeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MeStackSreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Me"
        component={MeScreen}
        options={{
          title: "A propos de moi",
          headerStyle: {
            backgroundColor: "#990099",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
function HomeStackSreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <NavbarSearch {...props} />,
          title: "What's the new ",
          headerStyle: {
            backgroundColor: "#990099",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchItem}
        options={({ route }) => ({
          title: "Recherche  " + route.params.text.toLowerCase(),
          headerStyle: {
            backgroundColor: "#990099",
          },
          headerTintColor: "#fff",
        })}
      />
      <Stack.Screen
        name="List"
        component={ListFilmScreen}
        options={({ route }) => ({
          title: "Film " + route.params.name.toLowerCase(),
          headerStyle: {
            backgroundColor: "#990099",
          },
          headerTintColor: "#fff",
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: "Detail du film " + route.params.detailfilm.title,
          headerStyle: {
            backgroundColor: "#990099",
          },
          headerTintColor: "#fff",
        })}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeStack") {
              iconName = focused ? "ios-list" : "ios-list";
            } else if (route.name === "Apropos") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#990099",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="HomeStack" component={HomeStackSreen} />
        <Tab.Screen name="Apropos" component={MeStackSreen} />
      </Tab.Navigator>
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

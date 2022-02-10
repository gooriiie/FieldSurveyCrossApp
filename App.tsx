import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from './src/components/Auth';
import Main from './src/components/Main';

/**
 * orange : #FF7800
 * dark_orange : #F7FF0A
 */

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen
            name="Auth"
            component={Auth}
          />
          <Stack.Screen 
            name="Main"
            component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

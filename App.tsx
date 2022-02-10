import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/EmailLogin";
import Signup from "./src/components/Signup";
import Signup2 from "./src/components/Signup2";
import Signup3 from "./src/components/Signup3";
import Signup4 from "./src/components/Signup4";
import Signup5 from "./src/components/Signup5";
import Splash from "./src/components/Splash";
import SelectLogin from "./src/components/SelectLogin";

/**
 * orange : #FF7800
 * dark_orange : #F7FF0A
 */

const Stack = createStackNavigator();

function Auth() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="SelectLogin"
            component={SelectLogin}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            name="Signup2"
            component={Signup2}
          />
          <Stack.Screen
            name="Signup3"
            component={Signup3}
          />
          <Stack.Screen
            name="Signup4"
            component={Signup4}
          />
          <Stack.Screen
            name="Signup5"
            component={Signup5}
          />
          <Stack.Screen
            name="EmailLogin"
            component={Login}
          />
      </Stack.Navigator>
    )
}

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          
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

import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectList from "./ProjectList";

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="ProjectList" component={ProjectList} />
            {/* <Tab.Screen name='MyPage' component={MyPage}/> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
    },
});

import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Project from "./Project";
import MyPage from "./MyPage";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Project"
                component={Project}
                options={{
                    tabBarLabel: "목록",
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="list-alt"
                            size={30}
                            style={{ color: focused ? "#FF7800" : "#B3B3B3" }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MyPage"
                component={MyPage}
                options={{
                    tabBarLabel: "마이페이지",
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="person-outline"
                            size={30}
                            style={{ color : focused ? "#FF7800" : "#B3B3B3" }}
                        />
                    ),
                }}
            />
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MyPage({ navigation } : any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>회원정보</Text>
            </View>
            <View style={styles.searchArea}></View>
            <View style={styles.listArea}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingLeft: 30,
        paddingRight: 30,
    },
    titleArea: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
    },
    searchArea: {
        flex: 1,
        alignItems: 'center'
    },
    listArea: {
        flex: 7,
        alignItems: 'center'
    }
});
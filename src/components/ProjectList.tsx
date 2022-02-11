import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SolidCircleButton from "./SolidCircleButton";

const Stack = createStackNavigator();

export default function ProjectList({ navigation } : any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 목록</Text>
                <SolidCircleButton
                    style={styles.button}
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="+"
                    onPress={() => navigation.navigate('AddProject1')}
                />
            </View>
            <View style={styles.searchArea}>

            </View>
            <View style={styles.listArea}>
                {/* FlatList 추가 */}
            </View>
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
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%'
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
        flex: 8,
        alignItems: 'center'
    }
});

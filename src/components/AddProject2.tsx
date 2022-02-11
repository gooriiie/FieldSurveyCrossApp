import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    FlatList,
    TextInput,
    TouchableOpacity,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import renderSpace from "./renderSpace";

const spaceData = [
    {
        id: "거실",
        name: "거실",
    },
    {
        id: "주방",
        name: "주방",
    },
    {
        id: "욕실1",
        name: "욕실1",
    },
    {
        id: "욕실2",
        name: "욕실2",
    },
    {
        id: "침실1",
        name: "침실1",
    },
    {
        id: "침실2",
        name: "침실2",
    },
    {
        id: "침실3",
        name: "침실3",
    },
    {
        id: "펜트리",
        name: "펜트리",
    },
    {
        id: "실외기실",
        name: "실외기실",
    },
];

export default function AddProject2({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 추가</Text>
            </View>
            <View style={styles.subtitleArea}>
                <Text style={styles.subtitle}>...상세주소 부분...</Text>
            </View>
            <View style={styles.spaceArea}>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.spaceEnd}>
                            <TouchableOpacity>
                                <Text>+ 공간추가하기</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    data={spaceData}
                    renderItem={renderSpace}
                    keyExtractor={(space) => space.id}
                    numColumns={4}
                    columnWrapperStyle={styles.row}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-around'
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingLeft: 30,
        paddingRight: 30,
    },
    titleArea: {
        flex: 1,
        justifyContent: "center",
        marginTop: "10%",
    },
    subtitleArea: {
        flex: 0.5,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#B3B3B3'
    },
    spaceArea: {
        flex: 8.5,
        justifyContent: 'space-between',
    },
    spaceEnd: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});

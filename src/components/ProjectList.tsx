import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SolidCircleButton from "./SolidCircleButton";
import {
    FlatList,
    TextInput,
    TouchableOpacity,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const data = [
    {
        nickname: "대전광역시 서구 느리울 12단지",
        address: "대전광역시 서구 관저동로42, 느리울 1201-1302",
    },
    {
        nickname: "대전광역시 서구 대자연 2단지",
        address: "대전광역시 서구 관저동로38, 대자연 209-1101",
    },
    {
        nickname: "대전광역시 서구 느리울 11단지",
        address: "대전광역시 서구 관저동로40, 느리울 1109-1101",
    },
    {
        nickname: "대전광역시 서구 대자연 1단지",
        address: "대전광역시 서구 관저동로37, 대자연 109-1301",
    },
    {
        nickname: "대전광역시 서구 더샵 15단지",
        address: "대전광역시 서구 관저동로43, 더샵 15-401",
    },
    {
        nickname: "대전광역시 서구 구봉 5단지",
        address: "대전광역시 서구 구봉로12, 구봉 503-501",
    },
];

export default function ProjectList({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 목록</Text>
                <SolidCircleButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="+"
                    onPress={() => navigation.navigate("AddProject1")}
                />
            </View>
            <View style={styles.searchArea}>
                <MaterialIcons name="search" size={30} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="주소를 입력해주세요"
                    placeholderTextColor="#696969"
                    multiline={false}
                    // onChangeText={}
                />
            </View>
            <View style={styles.listArea}>
                <FlatList
                    style={styles.flatList}
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.itemContainer}
                            key={index}
                        >
                            <Text style={styles.itemNickNameText}>
                                {item.nickname}
                            </Text>
                            <Text style={styles.itemAddressText}>
                                {item.address}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.address}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    titleArea: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "10%",
        paddingLeft: 30,
        paddingRight: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    searchArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 25,
        paddingRight: 25,
    },
    searchBar: {
        borderBottomColor: "#696969",
        borderBottomWidth: 3,
        width: "90%",
        padding: 5,
    },
    flatList: {
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
    },
    listArea: {
        flex: 8,
        alignItems: "center",
    },
    itemContainer: {
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 28,
        marginBottom: 5,
        height: 80,
        shadowColor: "#f1f2f3",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        width: "100%",
        shadowOpacity: 1,
        shadowRadius: 18.95,
        elevation: 1,
        zIndex: 1,
        backgroundColor: "white",
        borderRadius: 12,
        borderColor: "#F2F3F4",
        // borderColor: "black",
        borderWidth: 2,
    },
    itemNickNameText: {
        fontSize: 20,
        fontWeight: "700",
    },
    itemAddressText: {
        fontSize: 14,
        color: "#2090F8",
        fontWeight: "500",
    },
});

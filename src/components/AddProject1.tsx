import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SolidButton from "./SolidButton";

export default function AddProject1({ navigation }: any) {
    const [nickname, useNickname] = useState("");
    const [city, userCity] = useState("");
    const [detailAddress, useDetailAddress] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 추가</Text>
            </View>
            <View style={styles.subtitleArea}>
                <Text style={styles.subtitle}>주소를 선택해주세요</Text>
            </View>
            <View style={styles.selectArea}>
                <View style={styles.pickerArea}>
                    <Text style={styles.pickerName}>닉네임</Text>
                    <TextInput
                        style={styles.inputBox}
                        // value={this.state.password}
                        placeholder="주소에 대한 닉네임을 입력"
                        onChangeText={(nickname) => useNickname(nickname)}
                        autoCapitalize="none"
                        keyboardType="ascii-capable"
                    />
                </View>
                <View style={styles.pickerArea}>
                    <Text style={styles.pickerName}>시</Text>
                </View>
                <View style={styles.pickerArea}>
                    <Text style={styles.pickerName}>구</Text>
                </View>
                <View style={styles.pickerArea}>
                    <Text style={styles.pickerName}>동</Text>
                </View>
                <View style={styles.pickerArea}>
                    <Text style={styles.pickerName}>상세주소</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="주소에 대한 닉네임을 입력"
                        onChangeText={(detailAddress) => useDetailAddress(detailAddress)}
                        autoCapitalize="none"
                        keyboardType="ascii-capable"
                    />
                </View>
            </View>
            <View style={styles.buttonArea}>
                <SolidButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="다음으로"
                    onPress={() => navigation.navigate("AddProject2")}
                />
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
        width: "100%",
    },
    titleArea: {
        flex: 1,
        justifyContent: "center",
        marginTop: "10%",
    },
    subtitleArea: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 40,
        fontWeight: "bold",
    },
    selectArea: {
        flex: 7,
        alignItems: "center",
    },
    pickerArea: {
        flex: 1.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // borderBottomColor: 'black',
        // borderWidth: 2
    },
    pickerName: {
        marginRight: 20,
        fontSize: 15,
    },
    buttonArea: {
        flex: 1,
        alignItems: "center",
    },
    inputBox: {
        color: "black",
        borderBottomColor: "#FF7800",
        borderBottomWidth: 2,
        height: "20%",
        width: "80%",
        paddingLeft: 5,
        paddingBottom: 5,
    },
});

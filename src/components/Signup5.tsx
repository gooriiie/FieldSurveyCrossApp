import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import SolidButton from "./SolidButton";

export default function Signup5({ route, navigation } : any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>회원가입이 완료되었습니다!</Text>
                <Text style={styles.subtitle}>
                    로그인 후 사용하시면 됩니다
                </Text>
            </View>
            <View style={styles.inputArea}>
                
            </View>
            <View style={styles.buttonArea}>
                <SolidButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="로그인 하러가기"
                    onPress={() => navigation.navigate("SelectLogin")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 100,
        paddingBottom: 50,
        width: "100%",
    },
    titleArea: {
        flex: 2,
        justifyContent: "center",
    },
    inputArea: {
        flex: 7,
        paddingTop: 20
    },
    buttonArea: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
        color: "#BABABA",
    },
    inputBox: {
        color: "black",
        borderBottomColor: '#FF7800',
        borderBottomWidth: 2,
        paddingBottom: 8
    },
});

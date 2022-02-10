import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import SolidButton from "./SolidButton";

export default function Signup4({ route, navigation } : any) {
    const {email, password, name} = route.params;
    const [phoneNumber, usePhoneNumber] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>휴대폰번호를 입력해주세요</Text>
                <Text style={styles.subtitle}>
                    입력하신 휴대폰번호로 로그인이 가능합니다
                </Text>
            </View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.inputBox}
                    // value={this.state.password}
                    placeholder="휴대폰번호를 입력해주세요"
                    onChangeText={(phoneNumber) => usePhoneNumber(phoneNumber)}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                />
            </View>
            <View style={styles.buttonArea}>
                <SolidButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="인증하기"
                    onPress={() => navigation.navigate("Signup5")}
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

import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import SolidButton from "./SolidButton";

export default function EmailLogin({ navigation }: any) {
    const [email, useEmail] = useState("");
    const [password, usePassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>No-title</Text>
            </View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="이메일"
                    onChangeText={(email) => useEmail(email)}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="비밀번호"
                    onChangeText={(password) => usePassword(password)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.buttonArea}>
                <SolidButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="로그인"
                    onPress={() =>
                        navigation.reset({routes: [{name: 'Main'}]})
                    }
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
        paddingTop: 100,
        paddingBottom: 50,
        width: "100%",
    },
    titleArea: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginTop: '10%',
        fontSize: 50,
        fontWeight: "bold",
    },
    inputArea: {
        flex: 2,
        alignItems: "center",
        paddingTop: 20,
    },
    inputBox: {
        color: "black",
        borderBottomColor: "#FF7800",
        borderBottomWidth: 2,
        paddingBottom: 8,
        width: '100%',
        marginTop: 35,
        paddingLeft: 10
    },
    buttonArea: {
        flex: 2,
    },
});

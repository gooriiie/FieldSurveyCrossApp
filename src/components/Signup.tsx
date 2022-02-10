import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import SolidButton from "./SolidButton";

export default function Signup({ navigation }: any) {
    const [email, useEmail] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>이메일을 입력해주세요</Text>
                <Text style={styles.subtitle}>
                    자주 사용하는 이메일을 적습니다
                </Text>
            </View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.inputBox}
                    // value={this.state.password}
                    placeholder="이메일을 입력해주세요"
                    onChangeText={(email) => useEmail(email)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.buttonArea}>
                <SolidButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="다음으로"
                    onPress={() => navigation.navigate("Signup2", 
                        {
                            email: email
                        }
                    )}
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
        paddingTop: 20,
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
        fontSize: 20,
        color: "#BABABA",
    },
    inputBox: {
        color: "black",
        borderBottomColor: "#FF7800",
        borderBottomWidth: 2,
        paddingBottom: 8,
    },
});

import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import SolidOrangeButton from "./SolidOrangeButton";

export default function Signup2({ route, navigation } : any) {
    const {email} = route.params;
    const [password, usePassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>비밀번호를 입력해주세요</Text>
                <Text style={styles.subtitle}>
                    비밀번호는 6자 이상 15자 이하만 가능합니다
                </Text>
            </View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.inputBox}
                    // value={this.state.password}
                    placeholder="비밀번호를 입력해주세요"
                    onChangeText={(password) => usePassword(password)}
                    autoCapitalize="none"
                    keyboardType="visible-password"
                />
            </View>
            <View style={styles.buttonArea}>
                <SolidOrangeButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="다음으로"
                    onPress={() => navigation.navigate(
                        "Signup3",
                        {
                            email: email,
                            password: password
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

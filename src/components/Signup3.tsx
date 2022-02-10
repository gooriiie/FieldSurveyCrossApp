import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import SolidButton from "./SolidButton";

export default function Signup3({ route, navigation } : any) {
    const {email, password} = route.params;
    const [name, useName] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>이름을 입력해주세요</Text>
                <Text style={styles.subtitle}>
                    본인 이름을 입력해주세요
                </Text>
            </View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.inputBox}
                    // value={this.state.password}
                    placeholder="이름을 입력해주세요"
                    onChangeText={(name) => useName(name)}
                    autoCapitalize="none"
                    keyboardType="name-phone-pad"
                />
            </View>
            <View style={styles.buttonArea}>
                <SolidButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="다음으로"
                    onPress={() => navigation.navigate(
                        "Signup4",
                        {
                            email: email,
                            password: password,
                            name: name
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

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function renderSpace({ item }: any) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.outerView}>
                    <Image
                        source={{ uri: item.src }}
                        style={styles.tinyImage}
                    />
                    <View style={styles.innerView}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
        borderBottomColor: 'black',
        borderWidth: 2
    },
    outerView: {
        justifyContent: "center",
        alignItems: "center"
    },
    innerView: {
        width: 70
    },
    tinyImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        textAlign: "center"
    }
});

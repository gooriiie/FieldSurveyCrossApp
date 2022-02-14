import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";

export default function AddProject3({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 추가</Text>
            </View>
            <View style={styles.subtitleArea}>
                <Text style={styles.subtitle}>...상세주소 부분...</Text>
            </View>
            <View style={styles.moveButtonArea}>
                <Text style={styles.subtitle}>이동</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around",
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
        color: "#B3B3B3",
    },
    spaceArea: {
        flex: 7,
        justifyContent: "space-between",
    },
    moveButtonArea: {
        flex: 1.5
    }
});

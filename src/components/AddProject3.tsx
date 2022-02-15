import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SectionList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SolidButton from "./SolidButton";

const sectionDatas = [
    {
        title: "스위치",
        data: [
            "1구 스위치",
            "2구 스위치",
            "3구 스위치",
            "4구 스위치",
            "5구 스위치",
            "6구 스위치",
        ],
    },
    {
        title: "콘센트",
        data: ["1구 콘센트", "2구 콘센트", "4구 콘센트", "6구 콘센트"],
    },
    { title: "감지기", data: ["정온식 감지기", "변온식 감지기"] },
    { title: "조명", data: ["라인조명", "메인조명", "서브조명"] },
];

export default function AddProject3({ navigation }: any) {
    const [switch1, setSwitch1] = useState(0);
    const [switch2, setSwitch2] = useState(0);
    const [switch3, setSwitch3] = useState(0);
    const [switch4, setSwitch4] = useState(0);
    const [switch5, setSwitch5] = useState(0);
    const [switch6, setSwitch6] = useState(0);

    const [powerSocket1, setPowerSocket1] = useState(0);
    const [powerSocket2, setPowerSocket2] = useState(0);
    const [powerSocket4, setPowerSocket4] = useState(0);
    const [powerSocket6, setPowerSocket6] = useState(0);

    const [sensorConstant, setSensorConstant] = useState(0);
    const [sensorAlternative, setSensorAlternative] = useState(0);

    const [lightLine, setLightLine] = useState(0);
    const [lightMain, setLightMain] = useState(0);
    const [lightSub, setLightSub] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 추가</Text>
            </View>
            <View style={styles.subtitleArea}>
                <Text style={styles.subtitle}>...상세주소 부분...</Text>
            </View>
            <View style={styles.moveButtonArea}>
                <Text style={styles.movetext}>이동</Text>
            </View>
            <View style={styles.scrollArea}>
                <SectionList
                    sections={sectionDatas}
                    renderSectionHeader={({ section }) => {
                        return (
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>
                                    {section.title}
                                </Text>
                            </View>
                        );
                    }}
                    renderItem={({ item, index, section }) => {
                        return (
                            <View style={styles.itemView}>
                                <Text>{item}</Text>
                                <TouchableOpacity
                                    style={styles.plusMinusButton}
                                >
                                    <Text>-</Text>
                                </TouchableOpacity>
                                <Text>0</Text>
                                <TouchableOpacity
                                    style={styles.plusMinusButton}
                                >
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
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
    moveButtonArea: {
        flex: 1,
        // borderBottomColor: "black",
        // borderWidth: 2,
        paddingTop: 10,
    },
    movetext: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    scrollArea: {
        flex: 7,
    },
    sectionHeader: {
        padding: 4,
        backgroundColor: "#eeeeee",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    itemView: {
        flex: 1,
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
    },
    plusMinusButton: {
        width: 25,
        height: 25,
        backgroundColor: "#bababa",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
});

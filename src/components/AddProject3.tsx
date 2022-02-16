import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, SectionList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scrollTo } from "react-native-reanimated";

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

    const sectionDatas = [
        {
            title: "스위치",
            data: [
                {
                    name: "1구 스위치",
                    count: switch1,
                    _onPlusPress: function () {
                        setSwitch1(switch1 + 1);
                    },
                    _onMinusPress: function () {
                        if (switch1 > 0) {
                            setSwitch1(switch1 - 1);
                        }
                    },
                },
                {
                    name: "2구 스위치",
                    count: switch2,
                    _onPlusPress: function () {
                        setSwitch2(switch2 + 1);
                    },
                    _onMinusPress: function () {
                        if (switch2 > 0) {
                            setSwitch2(switch2 - 1);
                        }
                    },
                },
                {
                    name: "3구 스위치",
                    count: switch3,
                    _onPlusPress: function () {
                        setSwitch3(switch3 + 1);
                    },
                    _onMinusPress: function () {
                        if (switch3 > 0) {
                            setSwitch3(switch3 - 1);
                        }
                    },
                },
                {
                    name: "4구 스위치",
                    count: switch4,
                    _onPlusPress: function () {
                        setSwitch4(switch4 + 1);
                    },
                    _onMinusPress: function () {
                        if (switch4 > 0) {
                            setSwitch4(switch4 - 1);
                        }
                    },
                },
                {
                    name: "5구 스위치",
                    count: switch5,
                    _onPlusPress: function () {
                        setSwitch5(switch5 + 1);
                    },
                    _onMinusPress: function () {
                        if (switch5 > 0) {
                            setSwitch5(switch5 - 1);
                        }
                    },
                },
                {
                    name: "6구 스위치",
                    count: switch6,
                    _onPlusPress: function () {
                        setSwitch6(switch6 + 1);
                    },
                    _onMinusPress: function () {
                        if (switch6 > 0) {
                            setSwitch6(switch6 - 1);
                        }
                    },
                },
            ],
        },
        {
            title: "콘센트",
            data: [
                {
                    name: "1구 콘센트",
                    count: powerSocket1,
                    _onPlusPress: function () {
                        setPowerSocket1(powerSocket1 + 1);
                    },
                    _onMinusPress: function () {
                        if (powerSocket1 > 0) {
                            setPowerSocket1(powerSocket1 - 1);
                        }
                    },
                },
                {
                    name: "2구 콘센트",
                    count: powerSocket2,
                    _onPlusPress: function () {
                        setPowerSocket2(powerSocket2 + 1);
                    },
                    _onMinusPress: function () {
                        if (powerSocket2 > 0) {
                            setPowerSocket2(powerSocket2 - 1);
                        }
                    },
                },
                {
                    name: "4구 콘센트",
                    count: powerSocket4,
                    _onPlusPress: function () {
                        setPowerSocket4(powerSocket4 + 1);
                    },
                    _onMinusPress: function () {
                        if (powerSocket4 > 0) {
                            setPowerSocket4(powerSocket4 - 1);
                        }
                    },
                },
                {
                    name: "6구 콘센트",
                    count: powerSocket6,
                    _onPlusPress: function () {
                        setPowerSocket6(powerSocket6 + 1);
                    },
                    _onMinusPress: function () {
                        if (powerSocket6 > 0) {
                            setPowerSocket6(powerSocket6 - 1);
                        }
                    },
                },
            ],
        },
        {
            title: "감지기",
            data: [
                {
                    name: "정온식 감지기",
                    count: sensorConstant,
                    _onPlusPress: function () {
                        setSensorConstant(sensorConstant + 1);
                    },
                    _onMinusPress: function () {
                        if (sensorConstant > 0) {
                            setSensorConstant(sensorConstant - 1);
                        }
                    },
                },
                {
                    name: "변온식 감지기",
                    count: sensorAlternative,
                    _onPlusPress: function () {
                        setSensorAlternative(sensorAlternative + 1);
                    },
                    _onMinusPress: function () {
                        if (sensorAlternative > 0) {
                            setSensorAlternative(sensorAlternative - 1);
                        }
                    },
                },
            ],
        },
        {
            title: "조명",
            data: [
                {
                    name: "라인조명",
                    count: lightLine,
                    _onPlusPress: function () {
                        setLightLine(lightLine + 1);
                    },
                    _onMinusPress: function () {
                        if (lightLine > 0) {
                            setLightLine(lightLine - 1);
                        }
                    },
                },
                {
                    name: "메인조명",
                    count: lightMain,
                    _onPlusPress: function () {
                        setLightMain(lightMain + 1);
                    },
                    _onMinusPress: function () {
                        if (lightMain > 0) {
                            setLightMain(lightMain - 1);
                        }
                    },
                },
                {
                    name: "서브조명",
                    count: lightSub,
                    _onPlusPress: function () {
                        setLightSub(lightSub + 1);
                    },
                    _onMinusPress: function () {
                        if (lightSub > 0) {
                            setLightSub(lightSub - 1);
                        }
                    },
                },
            ],
        },
    ];

    const sectionlist = useRef();

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
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity
                        style={styles.moveButton}
                    >
                        <Text style={styles.moveButtonText}>스위치</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.moveButton}
                    >
                        <Text style={styles.moveButtonText}>콘센트</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.moveButton}
                    >
                        <Text style={styles.moveButtonText}>감지기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.moveButton}
                    >
                        <Text style={styles.moveButtonText}>조명</Text>
                    </TouchableOpacity>
                </ScrollView>
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
                                <Text>{item.name}</Text>
                                <TouchableOpacity
                                    style={styles.plusMinusButton}
                                    onPress={() => item._onMinusPress()}
                                >
                                    <Text>-</Text>
                                </TouchableOpacity>
                                <Text>{item.count}</Text>
                                <TouchableOpacity
                                    style={styles.plusMinusButton}
                                    onPress={() => item._onPlusPress()}
                                >
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => item.name + index}
                    showsVerticalScrollIndicator={false}
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
        justifyContent: 'center'
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
        flexDirection: "row",
        // borderBottomColor: "black",
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    movetext: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10
    },
    moveButton: {
        color: 'white',
        borderColor: '#FF7800',
        borderWidth: 2,
        borderRadius: 50,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    moveButtonText: {
        color: '#ff7800',
        fontSize: 16,
        fontWeight: 'bold'
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
function scrollToLocation(): void {
    throw new Error("Function not implemented.");
}


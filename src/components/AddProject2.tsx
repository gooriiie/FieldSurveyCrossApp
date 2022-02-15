import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    FlatList,
    TextInput,
    TouchableOpacity,
} from "react-native-gesture-handler";
import RenderSpace from "./RenderSpace";
import ModalContainer from "./ModalContainer";

export default function AddProject2({ navigation }: any) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [spaceName, setSpaceName] = useState<string>('');
    const [spaces, setSpaces] = useState<TypeSpace[]>([]);

    type TypeSpace = {
        id: string;
        name: string;
    };

    const createSpace = () => {
        const space = {
            id: spaceName,
            name: spaceName
        }
        setSpaces(prevList => [...prevList, space]);
        setShowModal(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 추가</Text>
            </View>
            <View style={styles.subtitleArea}>
                <Text style={styles.subtitle}>...상세주소 부분...</Text>
            </View>
            <View style={styles.spaceArea}>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.spaceEnd}>
                            <TouchableOpacity
                                onPress={() => setShowModal(true)}
                            >
                                <Text style={styles.buttonAddSpace}>+ 공간 추가하기</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    data={spaces}
                    renderItem={({item}) => <RenderSpace item={item} navigation={navigation}/>}
                    keyExtractor={(space) => space.id}
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                />
            </View>
            <ModalContainer show={showModal}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>
                        추가할 공간 이름을 적어주세요
                    </Text>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="예) 침실1"
                        onChangeText={(spaceName) => setSpaceName(spaceName)}
                    />
                    <View style={styles.modalButtonArea}>
                        <TouchableOpacity
                            onPress={createSpace}
                        >
                            <Text style={styles.buttonAddText}>추가</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <Text style={styles.buttonCancelText}>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalContainer>
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
        flex: 8.5,
        justifyContent: "space-between",
    },
    spaceEnd: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 22,
    },
    modalInput: {
        color: "black",
        marginBottom: 30,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        padding: 5,
        fontSize: 15,
    },
    modalButtonArea: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonAddText: {
        color: '#FF7800',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonCancelText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonAddSpace: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    }
});

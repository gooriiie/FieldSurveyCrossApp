import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SolidButton from './SolidButton';

export default function AddProject2({ navigation } : any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>프로젝트 추가</Text>
            </View>
            <View style={styles.subtitleArea}>
                <Text style={styles.subtitle}>주소를 선택해주세요</Text>
            </View>
            <View style={styles.selectArea}>
                <View style={styles.pickerArea}>
                    <Text>닉네임</Text>
                    
                </View>
                <View style={styles.pickerArea}>
                    <Text>시</Text>
                </View>
                <View style={styles.pickerArea}>
                    <Text>구</Text>
                </View>
                <View style={styles.pickerArea}>
                    <Text>동</Text>
                </View>
                <View style={styles.pickerArea}>
                    <Text>상세주소</Text>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <SolidButton
                    buttonColor="#FF7800"
                    textColor="#FFFFFF"
                    text="다음으로"
                    onPress={() =>
                        navigation.navigate('AddProject2')
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
    },
    titleArea: {
        flex: 1,
        justifyContent: 'center',
        marginTop: '10%'
    },
    subtitleArea: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    selectArea: {
        flex: 7,
        alignItems: 'center'
    },
    pickerArea: {
        flex: 1.2,
        justifyContent: 'center'
    },
    buttonArea: {
        flex: 1,
        alignItems: 'center'
    }
});

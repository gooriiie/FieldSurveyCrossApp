import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function ModalContainer({ show, children }: any) {
    return (
        <Modal
            visible={show}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.container}>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
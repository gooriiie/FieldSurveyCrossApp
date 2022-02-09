import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SolidOrangeButton(props: any) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {backgroundColor: props.buttonColor}
            ]}
            onPress={props.onPress}
        >
            <Text style={[
                styles.text,
                {color: props.textColor}
            ]}>{props.text}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 14
    }
});

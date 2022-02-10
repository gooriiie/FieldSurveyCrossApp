import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SolidCircleButton(props: any) {
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
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

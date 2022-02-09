import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Splash extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <ActivityIndicator 
                    style={styles.activityIndicator}
                    color="#6990f7"
                    size="large"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  });
import "react-native-gesture-handler";
import { NavigationRouteContext, useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function SelectLogin( { navigation } : any) {
    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>No-title</Text>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.loginButton}
            // onPress={() => 
            //   navigation.navigate('Signup')
            // }
          >
            <Icon name="mail" size={20} color="#BABABA" />
            <Text style={styles.loginText}>이메일로 로그인하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.signupText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: "40%",
    fontSize: 50,
    fontWeight: "bold",
  },
  buttonArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderColor: "#BABABA",
    borderWidth: 2,
    borderRadius: 8,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    marginTop: 5,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    marginLeft: 10,
    color: "#BABABA",
    fontSize: 14,
    fontWeight: "bold",
  },
  signupText: {
    color: "#FF7800",
    fontSize: 14,
    fontWeight: "bold",
  }
});

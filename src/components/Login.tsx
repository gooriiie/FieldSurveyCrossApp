import React from "react";
import { ReactNode } from "react";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class Login extends React.Component {
  state = {
    email: ``,
    password: ``,
  };

  navigateSignUp = () => {};

  render(): ReactNode {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            value={this.state.email}
            placeholder="email"
            onChangeText={(email) => this.setState({ email })}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputBox}
            value={this.state.password}
            placeholder="password"
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Button
            title="아직 계정이 없으신가요? 회원가입하기"
            onPress={this.navigateSignUp}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  inputBox: {
      flex: 1
  },
  button: {
      flex: 1
  },
  buttonText: {},
});

export default Login;

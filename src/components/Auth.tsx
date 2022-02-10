import React from 'react';
import Login from "./EmailLogin";
import Signup from "./Signup";
import Signup2 from "./Signup2";
import Signup3 from "./Signup3";
import Signup4 from "./Signup4";
import Signup5 from "./Signup5";
import SelectLogin from "./SelectLogin";
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

export default function Auth() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
              name="SelectLogin"
              component={SelectLogin}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
            />
            <Stack.Screen
              name="Signup2"
              component={Signup2}
            />
            <Stack.Screen
              name="Signup3"
              component={Signup3}
            />
            <Stack.Screen
              name="Signup4"
              component={Signup4}
            />
            <Stack.Screen
              name="Signup5"
              component={Signup5}
            />
            <Stack.Screen
              name="EmailLogin"
              component={Login}
            />
        </Stack.Navigator>
      )
}
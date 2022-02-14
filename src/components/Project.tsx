import React from 'react';
import ProjectList from './ProjectList';
import AddProject1 from './AddProject1';
import AddProject2 from './AddProject2';
import AddProject3 from './AddProject3';
import { createStackNavigator } from "@react-navigation/stack"
import renderSpace from './RenderSpace';

const Stack = createStackNavigator();

export default function Project() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="ProjectList"
              component={ProjectList}
            />
            <Stack.Screen
                name='AddProject1'
                component={AddProject1}
            />
            <Stack.Screen
                name='AddProject2'
                component={AddProject2}
            />
            <Stack.Screen
                name='AddProject3'
                component={AddProject3}
            />
            
        </Stack.Navigator>
    )
}
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../pages/Home';
import {Video} from '../pages/Video';
import {Perfil}from '../pages/Perfil';
const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name = "Home" component = {Home} />
                <Stack.Screen name = "Video" component = {Video} />
                <Stack.Screen name = "Perfil" component = {Perfil} />
            </Stack.Navigator>
        </NavigationContainer>
      );
};
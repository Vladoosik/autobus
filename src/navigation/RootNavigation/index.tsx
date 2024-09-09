// modules
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// screens
import {Home} from '../../screens';
// navigation
import BottomTabNavigator from '../BottomTabNavigation';


const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'bottomTab'} component={BottomTabNavigator}/>
        </Stack.Navigator>
    );
};

export default RootNavigation;

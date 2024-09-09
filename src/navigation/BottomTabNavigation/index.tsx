// modules
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {RouteProp} from '@react-navigation/native';
// screens
import {Home, Map, SeatAvaliability} from '../../screens';
// options
import getTabOptions from './options';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const tabOptions = useCallback(
    (route: RouteProp<any>) => getTabOptions(route),
    [],
  );

  return (
    <Tab.Navigator screenOptions={({route}) => tabOptions(route)}
    >
      <Tab.Screen name={'autobus'} component={Home} />
      <Tab.Screen name={'Map'} component={Map} />
      <Tab.Screen name={'seatAviability'} component={SeatAvaliability} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

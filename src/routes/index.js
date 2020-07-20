import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeStack from './homeStack';
import {HomeScreen} from '../containers';

const Stack = createStackNavigator();

let Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;

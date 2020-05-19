import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './MainScreen';
import UpdateProfile from './UpdateProfile';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};

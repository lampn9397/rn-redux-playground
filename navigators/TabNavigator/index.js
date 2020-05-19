import React from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeTab from './HomeTab';
import AccountTab from './AccountTab';

const Tab = createMaterialTopTabNavigator();

const indicatorStyle = StyleSheet.create({
  top: 0,
});

const tabBarOptions = { indicatorStyle: indicatorStyle };

export default () => {
  return (
    <Tab.Navigator tabBarPosition="bottom" tabBarOptions={tabBarOptions}>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="AccountTab" component={AccountTab} />
    </Tab.Navigator>
  );
};
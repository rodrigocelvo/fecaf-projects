import React from 'react';
import { View, LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Dashboard" component={Dashboard} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
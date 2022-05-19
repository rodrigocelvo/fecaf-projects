import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { List } from '../pages/List';

import { theme } from '../theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colors.blue,
            height: 100

          },
          tabBarActiveTintColor: theme.colors.darkblue,
          tabBarInactiveTintColor: theme.colors.white,
        }}
      >
        <Screen name="Home" component={Home}
          options={{
            title: 'Cadastrar',
            tabBarIcon: ({ color, size }) => (
              <Feather name="plus" color={color} size={size} />
            ),
          }}
        />

        <Screen name="List" component={List}
          options={{
            title: 'Listar',
            tabBarIcon: ({ color, size }) => (
              <Feather name="menu" color={color} size={size} />
            ),
          }}
        />

      </Navigator>
    </NavigationContainer>
  );
}

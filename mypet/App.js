import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';
import { theme } from './src/theme';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.colors.blue }} />
      <StatusBar style="light" />
      <Routes />
    </>
  );
}


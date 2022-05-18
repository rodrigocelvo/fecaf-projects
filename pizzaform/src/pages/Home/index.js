import React from 'react';

import { View } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

export function Home() {
  return (
    <View style={styles.container}>
      <Feather name="home" size={64} color="#000" />
    </View>
  );
}
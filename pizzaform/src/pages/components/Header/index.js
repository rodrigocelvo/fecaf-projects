import React from 'react';

import { Text, View, SafeAreaView, Image } from 'react-native';

import Brand from '../../../assets/brand.png';
import { styles } from './styles';

export function Header() {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.pizzaImg} source={Brand} />
          <Text style={styles.title}>FePizza</Text>
        </View>
        <Image style={styles.profileImage} source={{ uri: 'https://github.com/rodrigocelvo.png' }} />
      </View>
    </SafeAreaView>
  );
}
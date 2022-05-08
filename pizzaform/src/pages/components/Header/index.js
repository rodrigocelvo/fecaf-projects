import React from 'react';

import { Text, View, SafeAreaView, Image } from 'react-native';

import { styles } from './styles';

import logoImg from '../../../assets/logo.png';

export function Header() {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        <Image style={styles.logoImage} source={logoImg} />
        <Image style={styles.profileImage} source={{ uri: 'https://github.com/rodrigocelvo.png' }} />
      </View>
    </SafeAreaView>
  );
}
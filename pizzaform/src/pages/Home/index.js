import React from 'react';

import { View, Text } from 'react-native';

import { Header } from '../components/Header';
import { Input } from '../components/Input';


import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Input title="Cliente" icon="user" placeholder="Digite seu nome..." />
        <Input title="Cliente" icon="plus" placeholder="Digite seu nome..." />
        <Input title="Cliente" icon="settings" placeholder="Digite seu nome..." />
        <Input title="Cliente" icon="minus" placeholder="Digite seu nome..." />
      </View>
    </View>
  ); ''
}
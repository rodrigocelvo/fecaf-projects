import React from 'react';

import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>


          <View style={styles.content}>
            <Input title="Cliente" icon="user" placeholder="Alfredo..." />
            <Input title="Sabor" icon="tag" placeholder="Mussarela" />
            <Input title="Tamanho" icon="shopping-bag" placeholder="Média" />
            <Input title="Quantidade" icon="plus" placeholder="2" />

            <Button title="Comprar" icon="shopping-cart" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View >
  );
}
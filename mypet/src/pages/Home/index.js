import React from 'react';

import { View, Text, ScrollView } from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { styles } from './styles';

import PetImg from '../../assets/god-doggy.svg';

export function Home() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PetImg width={500} height={400} />
        <View style={styles.container}>

          <Text style={styles.title}>Cadastrar</Text>

          <Input icon="github" placeholder="Nome do Pet" />
          <Input icon="tag" placeholder="Raça" />
          <Input icon="airplay" placeholder="Peso" />
          <Input icon="calendar" placeholder="Nascimento" />
          <Button title="Cadastar" icon="plus" />
        </View>
      </ScrollView>
    </>
  );
}
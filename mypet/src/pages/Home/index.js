import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';

import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles';

import PetImg from '../../assets/god-doggy.svg';

export function Home() {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [weight, setWeight] = useState('');
  const [birth, setBirth] = useState('');

  async function handleNewPet() {
    try {
      const id = uuid.v4();

      const newData = {
        id,
        name,
        race,
        weight,
        birth
      }

      const response = await AsyncStorage.getItem('@mypet:pets');
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      await AsyncStorage.setItem('@mypet:pets', JSON.stringify(data));
      Alert.alert('Cadastro', 'Pet cadastrado com sucesso!');

      setName('');
      setRace('');
      setWeight('');
      setBirth('');

    } catch (error) {
      console.log(error)
      Alert.alert('Cadastro', 'Não foi possível cadastrar!');
    }
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PetImg width={500} height={400} />
        <View style={styles.container}>

          <Text style={styles.title}>Cadastrar</Text>

          <Input icon="github" placeholder="Nome do Pet" onChangeText={setName} value={name} />
          <Input icon="tag" placeholder="Raça" onChangeText={setRace} value={race} />
          <Input icon="airplay" placeholder="Peso" keyboardType="numeric" onChangeText={setWeight} value={weight} />
          <Input icon="calendar" placeholder="Nascimento" onChangeText={setBirth} value={birth} />
          <Button title="Cadastar" icon="plus" onPress={handleNewPet} />
        </View>
      </ScrollView>
    </>
  );
}
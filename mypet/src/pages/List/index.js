import React, { useCallback, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import catImg from '../../assets/cat.jpeg';
import { styles } from './styles';


export function List() {
  const [data, setData] = useState([]);

  async function handleFetchData() {
    const response = await AsyncStorage.getItem('@mypet:pets');

    const data = response ? JSON.parse(response) : [];
    setData(data);
  };

  async function handleDelete(id) {
    const response = await AsyncStorage.getItem('@mypet:pets');

    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter(item => item.id !== id);

    await AsyncStorage.setItem('@mypet:pets', JSON.stringify(data));
    setData(data)
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));

  return (
    <>
      <ScrollView>
        <ImageBackground source={catImg} style={styles.image}>
          <Text style={styles.title}>Listar</Text>
        </ImageBackground>

        <View style={styles.container}>
          {
            data.map(pet => (
              <View style={styles.item} key={pet.id}>
                <Text style={styles.name}>{pet.name}</Text>
                <Text style={styles.desc}>{pet.race} | {pet.weight} Kilos | {pet.birth}</Text>
                <TouchableOpacity onPress={() => handleDelete(pet.id)}>
                  <Text style={styles.delete}>Deletar</Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </>
  );
}
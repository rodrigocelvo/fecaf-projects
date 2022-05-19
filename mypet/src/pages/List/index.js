import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';

import { petsData } from '../../utils/pets.data';

import catImg from '../../assets/cat.jpeg';
import { styles } from './styles';

export function List() {
  return (
    <>
      <ScrollView>
        <ImageBackground source={catImg} style={styles.image}>
          <Text style={styles.title}>Listar</Text>
        </ImageBackground>

        <View style={styles.container}>
          {
            petsData.map(pet => (
              <View style={styles.item} key={pet.id}>
                <Text style={styles.name}>{pet.name}</Text>
                <Text style={styles.desc}>{pet.race} | {pet.weight} Kilos | {pet.birth}</Text>
              </View>

            ))
          }



        </View>
      </ScrollView>
    </>
  );
}
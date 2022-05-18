import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ImageBackground, ScrollView, Input } from 'react-native';

import Check from './src/assets/Check.png';
import Circle from './src/assets/Circle.png';
import Eye from './src/assets/Eye.png';
import EyeSplash from './src/assets/EyeSlash.png';
import TaskList from './src/assets/tasklist.png';

import { styles } from './styles';
import { tasksData } from './src/utils/tasks.data';


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={TaskList} style={styles.ImageBackground} >
        <View style={styles.imgContainer}>
          <Text style={styles.headerTitle}>Hoje</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={Eye} style={styles.eyeImg} />
          <Text style={styles.headerSubTitle}>ter, 17 de maio</Text>
        </View>
      </ImageBackground>

      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

          {tasksData.map((item) => (

            <View style={styles.boxContainer} key={item.id}>
              <View style={styles.box}>
                {
                  item.done ? <Image source={Check} style={styles.checkImg} /> : <Image source={Circle} style={styles.checkImg} />
                }
                <Text style={styles.title}>{item.task}</Text>
              </View>
              <View style={styles.boxDesk}>
                <Text style={styles.boxDesk}>{item.date}</Text>
              </View>
            </View>

          ))
          }

        </ScrollView>
      </View>
    </>
  );
}

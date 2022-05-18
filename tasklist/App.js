import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native';

import Check from './src/assets/Check.png';
import Circle from './src/assets/Circle.png';
import Eye from './src/assets/Eye.png';
import EyeSplash from './src/assets/EyeSlash.png';
import TaskList from './src/assets/tasklist.png';

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
          <Text style={styles.headerSubTitle}>qua, 20 de maio</Text>
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
                <Text style={styles.title}>{item.name}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingHorizontal: 20,
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 50,
    color: '#fff',
  },
  headerSubTitle: {
    fontSize: 20,
    color: '#fff',
  },
  eyeImg: {
    width: 30,
    height: 20,
    marginRight: 20,
  },
  boxContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  box: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  boxDesk: {
    marginLeft: 30,
  },
  checkImg: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  }

});

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

import checkImg from './src/assets/Check.png';
import circleImg from './src/assets/Circle.png';
import eyeImg from './src/assets/Eye.png';
import eyeSlashImg from './src/assets/EyeSlash.png';
import tasklistImg from './src/assets/tasklist.png';

import { styles } from './styles';
import { tasksData } from './src/utils/tasks.data';

export default function App() {
  const [tasksIsDone, setTasksIsDone] = useState(tasksData);

  function handleTasksDone(id) {
    const newTasks = tasksData.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });

    setTasksIsDone([newTasks]);
  }

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={tasklistImg} style={styles.ImageBackground} >
        <View style={styles.imgContainer}>
          <Text style={styles.headerTitle}>Hoje</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={eyeImg} style={styles.eyeImg} />
          <Text style={styles.headerSubTitle}>ter, 17 de maio</Text>
        </View>
      </ImageBackground>

      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

          {tasksData.map((item) => (
            <View style={styles.boxContainer} key={item.id}>
              <TouchableOpacity onPress={() => handleTasksDone(item.id)} >

                <View style={styles.box}>
                  {
                    item.done ? <Image source={checkImg} style={styles.checkImg} /> : <Image source={circleImg} style={styles.checkImg} />
                  }
                  <Text style={item.done ? styles.titleChecked : styles.title}>{item.task}</Text>
                </View>
                <View style={styles.boxDesk}>
                  <Text style={styles.boxDesk}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            </View>

          ))
          }

        </ScrollView>
      </View>
    </>
  );
}

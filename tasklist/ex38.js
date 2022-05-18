import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Botão 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Botão 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Botão 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#0A1033',
    padding: 8,
  },
  ButtonContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    borderRadius: 10
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: '#E51C44',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});

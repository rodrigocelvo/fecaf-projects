import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { Feather } from '@expo/vector-icons';



export function Button({ title, icon, ...rest }) {
  return (
    <TouchableOpacity>
      <View style={styles.container} {...rest}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconWrapper}>
          <Feather style={styles.icon} name={icon} size={24} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

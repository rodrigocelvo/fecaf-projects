import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import { styles } from './styles';

import { Feather } from '@expo/vector-icons';



export function Button({ title, icon, ...rest }) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconWrapper}>
        <Feather style={styles.icon} name={icon} size={24} />
      </View>
    </RectButton>
  );
}
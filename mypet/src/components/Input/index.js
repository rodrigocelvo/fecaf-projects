import React, { useState } from 'react';

import { View, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../theme';

export function Input({ name, icon, placeholder, ...rest }) {
  const [text, onChangeText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  return (
    <View style={[styles.container, { borderColor: isFocused ? theme.colors.blue : theme.colors.white }]}>
      <Feather style={styles.icon} name={icon} size={20} color={isFocused ? theme.colors.blue : theme.colors.title} />
      < TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
}
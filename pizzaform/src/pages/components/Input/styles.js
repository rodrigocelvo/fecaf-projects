import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

import '../Input';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.body,
    borderRadius: 10,
    height: 60,
    borderWidth: 3,

    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingRight: 20,
    fontSize: 16,
    color: theme.colors.text,
  },
  title: {
    fontSize: 20,
  },
  icon: {
    padding: 10,
  }
});
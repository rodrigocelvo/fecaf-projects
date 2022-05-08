import { StyleSheet } from 'react-native';

import { theme } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 30,
  }
});
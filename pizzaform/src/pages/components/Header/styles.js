import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.colors.primary,
  },

  container: {
    height: 180,
    backgroundColor: theme.colors.se,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  }
});
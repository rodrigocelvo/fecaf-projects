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
  title: {
    fontSize: 36,
    color: theme.colors.body,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 64,
    height: 64,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  pizzaImg: {
    width: 52,
    height: 52,
    resizeMode: 'contain'

  }
});
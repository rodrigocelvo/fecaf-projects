import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 20,
  },

  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },

  title: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: theme.colors.white,
    fontSize: 64
  },

  item: {
    marginBottom: 10,
    height: 100,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20
  },
  name: {
    fontSize: 24,
    color: theme.colors.darkblue,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 18,
    color: theme.colors.text,
  },
});
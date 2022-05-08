import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.body,
    borderRadius: 10,
    height: 60,
    marginBottom: 10,

    borderWidth: 3
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingRight: 20,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
  },
  icon: {
    padding: 10,
  }
});
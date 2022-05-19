import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 58,
    backgroundColor: theme.colors.green,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontSize: 20,
    textAlign: 'center',

  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',

    borderLeftWidth: 1,
    borderColor: theme.colors.darkgreen,
  },
  icon: {
    width: 24,
    height: 24,
    color: theme.colors.white
  },
});
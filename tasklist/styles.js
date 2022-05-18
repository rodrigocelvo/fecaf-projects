import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingHorizontal: 20,
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 50,
    color: '#fff',
  },
  headerSubTitle: {
    fontSize: 20,
    color: '#fff',
  },
  eyeImg: {
    width: 30,
    height: 20,
    marginRight: 20,
  },
  boxContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  box: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  boxDesk: {
    marginLeft: 30,
  },
  checkImg: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  },
  titleChecked: {
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: 'line-through',
  }
});
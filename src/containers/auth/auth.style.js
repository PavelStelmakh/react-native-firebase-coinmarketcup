import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 30,
  },
  tabBar: {
    backgroundColor: 'rgb(23, 23, 26)',
  },
  tabBarItem: {
    paddingVertical: 0,
    minHeight: 40,
    maxHeight: 40,
  },
  tabBarIndicator: {
    backgroundColor: 'rgb(97, 136, 255)',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#ffffff',
    marginBottom: 5,
  },
  input: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    height: 40,
  },
  button: {
    color: 'rgb(97, 136, 255)',
    backgroundColor: 'rgb(133, 140, 162)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 7,
    marginBottom: 40,
  },
  formWidth: {
    width: '80%',
    alignSelf: 'center',
  },
  formElement: {
    marginBottom: 25,
  },
  loginWithElement: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInIcon: {
    width: 48,
    height: 48,
    marginLeft: 10,
  },
});

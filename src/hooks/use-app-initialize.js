import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID } from '../config';
import { setUserData } from '../stores/user';
import { getUserData } from '../utils/user';
import { useSecureStorage } from './use-secure-storage';

export const useAppInitialize = () => {
  const dispatch = useDispatch();
  const { getItem, removeItem } = useSecureStorage();

  return async () => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
    });

    const emailPasswordLogged = !!auth().currentUser;
    const googleLogged = await GoogleSignin.isSignedIn();
    const logged = emailPasswordLogged || googleLogged;
    const userData = await getItem('user-data');

    if (logged && userData) {
      dispatch(setUserData(getUserData(userData)));
    } else if (userData) {
      await removeItem('user-data');
    } else if (logged) {
      emailPasswordLogged && (await auth().signOut());
      googleLogged && (await GoogleSignin.signOut());
    }
  };
};

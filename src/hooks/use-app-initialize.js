import { useDispatch } from 'react-redux';
import { useSecureStorage } from './use-secure-storage';
import { setUserData } from '../stores/user';
import { getUserData } from '../utils/user';

export const useAppInitialize = () => {
  const dispatch = useDispatch();
  const { getItem } = useSecureStorage();

  return () =>
    getItem('user-data').then(
      user => user && dispatch(setUserData(getUserData(user))),
    );
};

import React from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/Octicons';
import { selectIsLogin, deleteUserData } from '../../stores/user';
import { auth } from '../../config';
import CoinMarketCupIcon from '../../assets/coinmarketcap.svg';
import { styles } from './header.style';

export const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(deleteUserData());
      })
      .catch(() => Alert.alert('Sorry, please try again later'));
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitle}>
        <CoinMarketCupIcon style={styles.headerIconColor} />
        <Text style={styles.headerFontColor}>CoinMarketCup</Text>
      </View>
      {isLogin && (
        <TouchableHighlight onPress={handleLogOut}>
          <Icon name="sign-out" color="#fff" size={20} />
        </TouchableHighlight>
      )}
    </View>
  );
};

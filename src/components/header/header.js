import React from 'react';
import { Text, View } from 'react-native';
import CoinMarketCupIcon from '../../assets/coinmarketcap.svg';
import { styles } from './header.style';

export const Header = () => (
  <View style={styles.headerContainer}>
    <CoinMarketCupIcon style={styles.headerIconColor} />
    <Text style={styles.headerFontColor}>CoinMarketCup</Text>
  </View>
);

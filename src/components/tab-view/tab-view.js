import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './tab-view.style';

export const TabView = ({ children }) => (
  <LinearGradient
    style={styles.tabViewContainer}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    colors={['rgb(34, 37, 49)', 'rgba(34, 37, 49, 0)']}>
    {children}
  </LinearGradient>
);

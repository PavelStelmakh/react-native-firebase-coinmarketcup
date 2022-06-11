import React from 'react';
import { TabView } from '../../components/tab-view';
// import { View } from 'react-native';
import { News } from '../../components/news';
// import { styles } from './home.style';

export const Home = ({ navigation }) => {
  // navigation.navigate('SomeScreen');

  return (
    <TabView>
      <News />
    </TabView>
  );
};

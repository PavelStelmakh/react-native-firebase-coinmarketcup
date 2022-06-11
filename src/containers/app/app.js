import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../../components/header';
import { SplashScreen } from '../../components/splash-screen';
import { appInitialize } from '../../services/app-initialize';
import { Home } from '../home';
import { Trends } from '../trends';
import HouseIcon from '../../assets/house.svg';
import ChartIcon from '../../assets/chart.svg';
import { styles } from './app.style';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    const iconSize = size * 0.8;
    let Icon;

    if (route.name === 'Home') {
      Icon = HouseIcon;
    } else if (route.name === 'Trends') {
      Icon = ChartIcon;
    }

    return <Icon style={{ width: iconSize, height: iconSize, fill: color }} />;
  },
});

const tabBarOptions = {
  inactiveTintColor: 'rgb(133, 140, 162)',
  activeTintColor: 'rgb(97, 136, 255)',
  activeBackgroundColor: 'rgb(23, 25, 36)',
  inactiveBackgroundColor: 'rgb(23, 25, 36)',
  showLabel: false,
  style: { borderTopWidth: 0 },
};

export const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    appInitialize().then(() => setAppReady(true));
  }, []);

  return (
    <>
      {appReady && (
        <View style={styles.appContainer}>
          <Header />
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={screenOptions}
              tabBarOptions={tabBarOptions}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Trends" component={Trends} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      )}
      <SplashScreen appReady={appReady} />
    </>
  );
};

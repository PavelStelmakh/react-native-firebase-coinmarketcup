import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../home';
import { Trends } from '../trends';
import HouseIcon from '../../assets/house.svg';
import ChartIcon from '../../assets/chart.svg';

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

export const Main = () => (
  <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Trends" component={Trends} />
  </Tab.Navigator>
);

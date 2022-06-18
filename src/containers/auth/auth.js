import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LoginForm } from './login-form';
import { RegistrationForm } from './registration-form';
import { styles } from './auth.style';

const Tab = createMaterialTopTabNavigator();

export const Auth = () => (
  <Tab.Navigator
    initialRouteName="LoginForm"
    screenOptions={{
      tabBarActiveTintColor: 'rgb(97, 136, 255)',
      tabBarInactiveTintColor: 'rgb(133, 140, 162)',
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabBarItem,
      tabBarLabelStyle: styles.tabBarLabel,
      tabBarIndicatorStyle: styles.tabBarIndicator,
    }}>
    <Tab.Screen
      name="LoginForm"
      component={LoginForm}
      options={{ tabBarLabel: 'Sign in' }}
    />
    <Tab.Screen
      name="RegistrationForm"
      component={RegistrationForm}
      options={{ tabBarLabel: 'Sign up' }}
    />
  </Tab.Navigator>
);

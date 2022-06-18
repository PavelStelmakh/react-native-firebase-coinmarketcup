import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from '../main';
import { Header } from '../../components/header';
import { SplashScreen } from '../../components/splash-screen';
import { Auth } from '../auth';
import { useAppInitialize } from '../../hooks/use-app-initialize';
import { selectIsLogin } from '../../stores/user';
import { styles } from './view.style';

export const View = () => {
  const [appReady, setAppReady] = useState(false);
  const isLogin = useSelector(selectIsLogin);

  const appInitialize = useAppInitialize();

  useEffect(() => {
    appInitialize().then(() => setAppReady(true));
  }, []);

  return (
    <>
      {appReady && (
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Header />
            {isLogin ? <Main /> : <Auth />}
          </NavigationContainer>
        </SafeAreaView>
      )}
      <SplashScreen appReady={appReady} />
    </>
  );
};

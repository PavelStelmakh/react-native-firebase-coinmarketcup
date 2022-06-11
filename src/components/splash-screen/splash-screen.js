import React, { useMemo, useEffect, useState } from 'react';
import { Animated } from 'react-native';
import CoinMarketCupIcon from '../../assets/coinmarketcap.svg';
import { IMAGE_SHOWING, IMAGE_SHOWN, HIDDEN } from './constants';
import { styles } from './splash-screen.style';

export const SplashScreen = ({ appReady }) => {
  const imageOpacity = useMemo(() => new Animated.Value(0), []);
  const [splashSreenState, setSplashSreenState] = useState(IMAGE_SHOWING);

  useEffect(() => {
    if (splashSreenState === IMAGE_SHOWING) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setSplashSreenState(IMAGE_SHOWN);
      });
    }
  }, [imageOpacity, splashSreenState]);

  useEffect(() => {
    if (splashSreenState === IMAGE_SHOWN) {
      if (appReady) {
        setSplashSreenState(HIDDEN);
      }
    }
  }, [appReady, splashSreenState]);

  return (
    splashSreenState !== HIDDEN && (
      <Animated.View collapsable={false} style={styles.splashScreenContainer}>
        <Animated.View style={{ opacity: imageOpacity }}>
          <CoinMarketCupIcon style={styles.splashScreenIcon} />
        </Animated.View>
      </Animated.View>
    )
  );
};

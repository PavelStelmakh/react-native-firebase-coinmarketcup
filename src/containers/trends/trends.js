import React, { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabView } from '../../components/tab-view';
import { TrendList } from '../../components/trend-list';
import { useFetch } from '../../hooks/use-fetch';

import { Home } from '../home';

const Stack = createStackNavigator();

export const Trends = ({ navigation }) => {
  const [markedTrends, setMarkedTrends] = useState({});

  const handleTrendMark = useCallback(
    (id, mark) => {
      setMarkedTrends(state => {
        const newState = { ...state, [id]: mark };

        AsyncStorage.setItem(
          '@preferences',
          JSON.stringify({
            markedTrends: newState,
          }),
        );

        return newState;
      });
    },
    [setMarkedTrends],
  );

  const selectTrends = useCallback(
    trends =>
      trends?.data?.map(({ quote: { USD: usd }, symbol, ...rest }) => ({
        ...rest,
        symbol,
        onMark: mark => handleTrendMark(symbol, mark),
        onOpenDetails: () =>
          navigation.nagivate('TrendDetails', {
            id: rest.id,
            symbol,
            name: rest.name,
          }),
        marked: markedTrends[symbol],
        price: usd.price,
        percentChange: usd.percent_change_24h,
        marketCapital: usd.market_cap,
        logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${rest.id}.png`,
      })),
    [handleTrendMark, markedTrends],
  );

  const { loading, onFetch, data, fetchBuilder } = useFetch(selectTrends);

  const loadLocalPreferences = () =>
    AsyncStorage.getItem('@preferences').then(store => {
      console.log(store);
      if (store) {
        const { markedTrends: storedMarketTrends } = JSON.parse(store) || {};

        setMarkedTrends(storedMarketTrends);
      }
    });

  useEffect(() => {
    loadLocalPreferences();
    fetchBuilder
      .setUrl(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      )
      .addQueryParameter('limit', 20);

    onFetch();
  }, []);

  const TrendsListComponent = () => (
    <TabView>
      {loading && !data ? (
        <ActivityIndicator />
      ) : (
        <TrendList trends={data} loading={loading} onRefresh={onFetch} />
      )}
    </TabView>
  );

  return (
    <Stack.Navigator initialRouteName="TrendsList">
      <Stack.Screen name="TrendsList" component={TrendsListComponent} />
      <Stack.Screen name="TrendDetails" component={Home} />
    </Stack.Navigator>
  );
};

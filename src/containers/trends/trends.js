import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import { TabView } from '../../components/tab-view';
import { TrendList } from '../../components/trend-list';
import { useFetch } from '../../hooks/use-fetch';
import {
  selectUser,
  selectTrendPreferencesMap,
  setTrendPreferences,
  addTrendPreference,
  deleteTrendPreference,
} from '../../stores/user';

import { Home } from '../home';

const Stack = createStackNavigator();

export const Trends = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const markedTrends = useSelector(selectTrendPreferencesMap);

  const handleTrendMark = useCallback(
    (trend, mark) => {
      if (mark) {
        const docData = {
          userId: userData.uid,
          coinId: trend,
        };
        firestore()
          .collection('TrendPreferences')
          .add(docData)
          .then(newDoc =>
            dispatch(addTrendPreference({ id: newDoc.id, ...docData })),
          )
          .catch(error => console.error(error));
      } else {
        const docId = markedTrends[trend].id;

        firestore()
          .collection('TrendPreferences')
          .doc(docId)
          .delete()
          .then(() => dispatch(deleteTrendPreference(docId)))
          .catch(error => console.error(error));
      }
    },
    [markedTrends],
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
        marked: Boolean(markedTrends[symbol]),
        price: usd.price,
        percentChange: usd.percent_change_24h,
        marketCapital: usd.market_cap,
        logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${rest.id}.png`,
      })),
    [handleTrendMark, markedTrends],
  );

  const { loading, onFetch, data, fetchBuilder } = useFetch(selectTrends);

  const loadLocalPreferences = async () => {
    firestore()
      .collection('TrendPreferences')
      .where('userId', '==', userData.uid)
      .get()
      .then(({ docs }) => docs.map(doc => ({ id: doc.id, ...doc.data() })))
      .then(docs => {
        dispatch(setTrendPreferences(docs));
      })
      .catch(error => console.error(error));
  };

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

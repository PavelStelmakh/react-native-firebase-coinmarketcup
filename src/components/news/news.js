import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFetch } from '../../hooks/use-fetch';
import { Panel } from '../panel';

export const News = () => {
  // const { loading, onFetch, data } = useFetch();

  useEffect(() => {
    // onFetch('https://data.messari.io/api/v1/news');
  }, []);

  // console.log('data', data);

  return (
    // <Panel title="Discover" loading={loading} onLinkClick={() => {}}>
      <Text>News</Text>
    // </Panel>
  );
};

import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { TrendItem } from '../trend-item';

const renderItem = ({ item, index }) => (
  <TrendItem key={item.symbol} {...item} number={index + 1} />
);

export const TrendList = ({ trends, loading, onRefresh }) => (
  <FlatList
    data={trends ?? []}
    refreshControl={
      <RefreshControl refreshing={loading} onRefresh={onRefresh} />
    }
    renderItem={renderItem}
    keyExtractor={item => item.symbol}
  />
);

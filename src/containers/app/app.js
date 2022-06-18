import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../stores';
import { View } from '../view';

export const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

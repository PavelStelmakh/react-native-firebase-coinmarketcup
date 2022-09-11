import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { TrendItem } from '../src/components/trend-item';

describe('<TrendItem />', () => {
  it('should rendercomponent', () => {
    const props = {
      logo: 'https://logo.com/btc',
      name: 'Bitcoin',
      number: 1,
      symbol: 'BTC',
      percentChange: 21,
      price: 1234,
      marketCapital: 123456789123,
      marked: false,
      onMark: jest.fn(),
      onOpenDetails: jest.fn(),
    };

    render(<TrendItem {...props} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});

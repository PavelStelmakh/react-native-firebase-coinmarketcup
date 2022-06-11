import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { TrendChart } from '../trend-chart';
import { formatCurrency, formatPercent } from '../../utils/number-formatting';
import { styles } from './trend-item.style';

const trendsUpIconProps = {
  name: 'triangle-up',
  color: '#16c784',
};

const trendsDownIconProps = {
  name: 'triangle-down',
  color: '#ea3943',
};

export const TrendItem = ({
  logo,
  name,
  number,
  symbol,
  percentChange,
  price,
  marketCapital,
  marked,
  onMark,
  onOpenDetails,
}) => (
  <TouchableHighlight onPress={onOpenDetails}>
    <View style={styles.container}>
      <Image source={{ uri: logo }} style={styles.image} />
      <View style={styles.currencyInfoContainer}>
        <View style={styles.currencyNameInfoContainer}>
          <Text style={[styles.text, styles.title]}>{name}</Text>
          <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
              <View style={styles.itemNumberContainer}>
                <Text style={[styles.itemNumber, styles.text]}>{number}</Text>
              </View>
              <Text style={styles.subTitle}>{symbol}</Text>
            </View>
            <View style={[styles.flexContainer, styles.indexContainer]}>
              <Icon
                {...(percentChange >= 0
                  ? trendsUpIconProps
                  : trendsDownIconProps)}
                size={15}
              />
              <Text style={styles.subTitle}>
                {formatPercent(Math.abs(percentChange))}
              </Text>
            </View>
          </View>
        </View>
        <TrendChart
          containerStyle={styles.chartContainer}
          trendPositive={percentChange >= 0}
          assetKey={name.replace(/\s/gi, '-').toLowerCase()}
        />
        <View style={styles.currencyAmount}>
          <Text style={[styles.text, styles.title]}>
            {formatCurrency(price)}
          </Text>
          <Text style={styles.subTitle}>
            Mar. cup. {formatCurrency(marketCapital)}
          </Text>
        </View>
      </View>
      <View style={styles.trendMark}>
        <AntIcon
          name={marked ? 'star' : 'staro'}
          color={marked ? '#f6b87e' : 'rgb(133, 140, 162)'}
          size={10}
          onPress={() => onMark(!marked)}
        />
      </View>
    </View>
  </TouchableHighlight>
);

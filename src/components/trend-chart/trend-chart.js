import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useFetch } from '../../hooks/use-fetch';
import { formatDate, addDays } from '../../utils/date';
import { styles } from './trend-chart.style';

const selectStatisticData = response =>
  response?.data?.values?.map(value => value[4]);

export const TrendChart = ({
  trendPositive,
  assetKey,
  metricID = 'price',
  containerStyle,
}) => {
  const [chartParentWidth, setChartParentWidth] = useState(null);
  const { loading, onFetch, data, fetchBuilder } =
    useFetch(selectStatisticData);
  const chartColor = trendPositive ? '#16c784' : '#ea3943';

  useEffect(() => {
    const today = new Date();
    const endDate = formatDate(today);
    const startDate = addDays(today, -7);

    fetchBuilder
      .setUrl(
        `https://data.messari.io/api/v1/assets/${assetKey}/metrics/${metricID}/time-series`,
      )
      .addQueryParameter('interval', '1d')
      .addQueryParameter('start', startDate)
      .addQueryParameter('end', endDate);

    onFetch();
  }, []);

  return (
    <View
      style={containerStyle}
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }>
      {loading || !data || !chartParentWidth ? (
        <ActivityIndicator />
      ) : (
        <LineChart
          data={{ datasets: [{ data }] }}
          width={chartParentWidth}
          height={40}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            fillShadowGradientToOpacity: 0,
            fillShadowGradientFrom: chartColor,
            color: () => chartColor,
            strokeWidth: 2,
          }}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          style={styles.trendChart}
          bezier
        />
      )}
    </View>
  );
};

import {
  NUMBER_ABBREVIATION_RANGE,
  NUMBER_ABBREVIATION,
  NUMBER_ABBREVIATION_DESCRIPTION,
  CURRENCY_SYMBOL,
} from '../constants';

const converNumberToShort = number => {
  const [symbol] = Object.entries(NUMBER_ABBREVIATION_RANGE).find(
    ([_, [min, max]]) => Math.abs(number) >= min && number < max,
  );

  return {
    number: number / NUMBER_ABBREVIATION[symbol],
    symbol: NUMBER_ABBREVIATION_DESCRIPTION[symbol],
  };
};

export const formatCurrency = (
  amount,
  { currency = 'USD', signAtStart = true } = {},
) => {
  const { number, symbol } = converNumberToShort(amount);
  const sign = CURRENCY_SYMBOL[currency];
  let formattedNumber = `${number.toLocaleString('ru-RU', {
    maximumFractionDigits: 3,
  })} ${symbol}`;

  return signAtStart
    ? `${sign}${formattedNumber}`
    : `${formattedNumber} ${sign}`;
};

export const formatPercent = number =>
  (number / 100).toLocaleString('ru-RU', {
    style: 'percent',
    maximumFractionDigits: 3,
    minimumFractionDigits: 3,
    signDisplay: 'never',
  });

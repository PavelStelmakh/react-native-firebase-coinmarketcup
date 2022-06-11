import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: 'rgba(133, 140, 162, 0.5)',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 10,
    color: 'rgb(133, 140, 162)',
  },
  image: {
    width: 27,
    height: 27,
    marginRight: 7,
    flexGrow: 0,
    flexShrink: 0,
  },
  currencyInfoContainer: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  currencyNameInfoContainer: {
    flexGrow: 3,
    flexBasis: 0,
  },
  indexContainer: {
    marginLeft: 5,
  },
  chartContainer: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 50,
    alignItems: 'center',
  },
  currencyAmount: {
    alignItems: 'flex-end',
    flexGrow: 3,
    flexBasis: 0,
  },
  text: {
    color: '#fff',
  },
  itemNumberContainer: {
    paddingHorizontal: 5,
    height: 13,
    borderRadius: 4,
    backgroundColor: 'rgb(133, 140, 162)',
    marginRight: 3,
  },
  itemNumber: {
    fontSize: 10,
    lineHeight: 13,
  },
  trendMark: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
  },
});

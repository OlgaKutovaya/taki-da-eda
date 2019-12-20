import {StyleSheet} from 'react-native';
import {palette} from '../../palette';

export const styles = StyleSheet.create({
  bannerFridayContainer: {
    backgroundColor: palette.burntUmber,
  },
  imgWrapper: {
    width: '45%',
  },
  foodIcon: {
    width: '100%',
    height: 170,
    borderRadius: 3,
  },
  textWrapper: {
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: palette.coconutCream,
  },
  subtext: {
    lineHeight: 22,
    fontStyle: 'italic',
    color: palette.coconutCream,
    fontSize: 16,
  },
  discountText: {
    color: palette.coconutCream,
    marginTop: 7,
    fontSize: 40,
  },
});

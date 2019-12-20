import {StyleSheet} from 'react-native';
import {palette} from '../../palette';

export const styles = StyleSheet.create({
  cartItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    borderBottomColor: palette.starDust,
    borderBottomWidth: 1,
  },
  productImg: {
    width: 100,
    height: 70,
    borderRadius: 7,
  },
  detailsWrapper: {
    marginRight: 10,
  },
  productDetails: {
    flexDirection: 'row',
  },
  productDetailsNamePriceWeight: {
    marginRight: 10,
  },
  productDetailsName: {
    lineHeight: 25,
    fontSize: 17,
    color: palette.burntUmber,
  },
  productDetailsDefaultPriceWeight: {
    flexDirection: 'row',
  },
  productDetailsDefaultWeightText: {
    fontSize: 15,
    color: palette.seaGreen,
  },
  productDetailsDefaultPriceText: {
    color: palette.seaGreen,
  },
  productPriceCartWrapper: {
    backgroundColor: palette.coconutCream,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  productPriceCartText: {
    fontSize: 15,
    color: palette.burntUmber,
  },
  counter: {},
});

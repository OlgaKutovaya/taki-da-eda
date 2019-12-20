import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  productWrapper: {
    width: width / 2,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  productCard: {
    paddingBottom: 3,
    height: 220,
    borderBottomWidth: 2,
    borderColor: palette.gallery,
  },
  productImg: {
    width: '100%',
    height: 120,
    marginBottom: 7,
  },
  title: {
    paddingLeft: 7,
    marginBottom: 10,
    color: palette.seaGreen,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  productDetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
  productWeight: {
    fontSize: 15,
    color: palette.seaGreen,
  },
  productPrice: {
    fontSize: 15,
    color: palette.burntUmber,
    fontStyle: 'italic',
  },
});

import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../../palette';

const {width} = Dimensions.get('window');
const countTextSize = 23;

export const styles = StyleSheet.create({
  productDetailsWrapper: {
    alignItems: 'center',
  },
  content: {
    width: width * 0.9,
  },
  productImg: {
    marginTop: 10,
    height: 270,
    width: width * 0.9,
    borderRadius: 5,
  },
  productDetailsInnerWrapper: {
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productName: {
    width: 200,
    flexWrap: 'wrap',
    fontSize: 22,
    fontWeight: 'bold',
    color: palette.seaGreen,
    lineHeight: 35,
  },
  productWeight: {
    color: palette.burntUmber,
    lineHeight: 20,
  },
  productPriceContainer: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.coconutCream,
    borderRadius: 50,
  },
  productPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: palette.burntUmber,
  },

  // ShortDescription
  consistDescriptionWrapper: {
    borderColor: palette.seaGreen,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
  consistDescriptionTitle: {
    textAlign: 'justify',
    color: palette.seaGreen,
    fontWeight: 'bold',
    fontSize: 17,
  },
  consistDescriptionText: {
    color: palette.codGray,
    fontWeight: 'normal',
    fontSize: 14,
  },
  goToFullDescriptionBtn: {
    alignSelf: 'flex-end',
    marginTop: 15,
    backgroundColor: palette.seaGreen,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  goToFullDescriptionBtnText: {
    color: palette.coconutCream,
  },
  // Content
  pricePerGrText: {
    fontSize: 16,
    color: palette.burntUmber,
    fontStyle: 'italic',
  },
  minWeightOrderText: {
    fontSize: 16,
    paddingVertical: 5,
    color: palette.seaGreen,
  },
  addToFavouriteWrapper: {
    marginVertical: 15,
  },
  // Counter
  counterContentWrapper: {
    marginTop: 30,
    paddingVertical: 25,
    borderTopColor: palette.seaGreen,
    borderTopWidth: 1,
  },
  counterContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterTitle: {
    color: palette.seaGreen,
    textTransform: 'uppercase',
    fontSize: countTextSize,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countImg: {
    width: 35,
    height: 35,
  },
  counterQuantity: {
    fontSize: countTextSize,
    fontWeight: 'bold',
    color: palette.burntUmber,
    marginHorizontal: 7,
  },
  measureText: {
    marginLeft: 7,
    fontSize: countTextSize,
    color: palette.seaGreen,
  },
  addToCartBtn: {
    marginTop: 20,
    marginBottom: 5,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: palette.seaGreen,
    borderRadius: 5,
  },
  addToCartBtnText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: palette.coconutCream,
  },
});

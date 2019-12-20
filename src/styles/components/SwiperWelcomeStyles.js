import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  wrapper: {
    width: width,
    height: 360,
    justifyContent: 'center',
  },
  slide: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideInner: {
    width: 350,
  },
  slideInnerTop: {
    alignItems: 'center',
  },
  topImg: {
    height: 320,
    width: width,
  },
  slideInnerBottom: {
    marginTop: 40,
    height: 100,
  },
  slideOneInnerBottomText: {
    fontSize: 22,
    color: palette.aubergine,
    textAlign: 'center',
  },
  dotInactive: {
    backgroundColor: '#C0C0C0',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  dotActive: {
    backgroundColor: palette.seaGreen,
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  nextBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.seaGreen,
    height: 52,
    width: 230,
    marginTop: 26,
    marginBottom: 33,
    borderRadius: 4,
  },
  nextBtnText: {
    fontSize: 17,
    color: '#fff',
  },
});

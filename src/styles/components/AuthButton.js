import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    width: width * 0.8,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: palette.seaGreen,
    borderRadius: 30,
  },
  btnText: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 18,
    color: palette.coconutCream,
  },
});

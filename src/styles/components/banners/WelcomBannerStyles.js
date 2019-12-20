import {StyleSheet} from 'react-native';
import {palette} from '../../palette';

export const styles = StyleSheet.create({
  bannerWelcomeContainer: {
    backgroundColor: palette.oracle,
    justifyContent: 'center',
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: palette.coconutCream,
  },
});

import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../palette';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    width: width * 0.8,
    flexGrow: 0,
  },
  title: {
    color: palette.seaGreen,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  LoginBtn: {
    alignSelf: 'center',
    marginTop: 40,
    paddingBottom: 3,
    borderBottomColor: palette.oracle,
    borderBottomWidth: 1,
  },
  LoginBtnText: {
    textTransform: 'uppercase',
    fontSize: 18,
    color: palette.oracle,
  },
});

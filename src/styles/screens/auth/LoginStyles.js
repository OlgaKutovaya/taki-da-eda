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
    marginBottom: 50,
  },
  accessoryBtnWrapper: {
    width: width * 0.8,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  forgotPasswordBtn: {
    marginBottom: 30,
    paddingBottom: 2,
    borderBottomColor: palette.aubergine,
    borderBottomWidth: 1,
  },
  forgotPasswordBtnText: {
    fontSize: 16,
    color: palette.aubergine,
  },
  signUpBtnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 18,
    color: palette.oracle,
  },
});

import {StyleSheet} from 'react-native';
import {palette} from '../../palette';

export const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  inputLabel: {
    color: palette.oracle,
    fontSize: 16,
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  btnContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 7,
  },
  btn: {
    width: '40%',
  },
});

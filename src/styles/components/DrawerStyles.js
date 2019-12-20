import {StyleSheet} from 'react-native';
import {palette} from '../palette';

export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  closeDrawerContainer: {
    marginTop: 10,
    marginRight: 10,
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
  },
  closeDrawerBtn: {
    width: 40,
    height: 40,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#000',
  },
  userInfoContainer: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {
    width: 55,
    height: 55,
  },
  userName: {
    marginLeft: 15,
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: palette.oracle,
  },
  unregisteredUserInfoContainer: {
    height: 120,
    backgroundColor: palette.oracle,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 15,
    color: palette.coconutCream,
    fontSize: 27,
  },
  loginBtnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginBtn: {
    // width: 100,
  },
  loginBtnText: {
    color: palette.drover,
    fontSize: 18,
  },
});

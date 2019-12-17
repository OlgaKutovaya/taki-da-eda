import {createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from '../screens/Welcome/Welcome';
import AppInnerNavigator from './AppInnerNavigator';
import {AuthNavigator} from './StackNavigators';

const AppNavigator = createSwitchNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Auth: {
      screen: AuthNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
    AppInner: {
      screen: AppInnerNavigator,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default AppNavigator;

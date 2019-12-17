import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';
import Dashboard from '../screens/Dashboard/Dashboard';
import Orders from '../screens/Dashboard/Orders';
import Bonuses from '../screens/Dashboard/Bonuses';
import Drawer from '../components/Drawer';
import {
  CartStackNavigator,
  HomeStackNavigator,
  InfoStackNavigator,
  ShopStackNavigator,
} from './StackNavigators';

const {width} = Dimensions.get('window');

const drawerNavigatorConfig = {
  backBehavior: 'initialRoute',
  overlayColor: 'rgba(0,0,0,0.35)',
  drawerWidth: width * 0.7,
  drawerPosition: 'right',
  contentComponent: props => <Drawer {...props} />,
};

const drawerNavigatorScreens = {
  Dashboard: {
    screen: Dashboard,
    mode: 'modal',
  },
  Orders: {
    screen: Orders,
    mode: 'modal',
  },
  Bonuses: {
    screen: Bonuses,
    mode: 'modal',
  },
};

export const InfoDrawerNavigator = createDrawerNavigator(
  {
    Info: {
      screen: InfoStackNavigator,
    },
    ...drawerNavigatorScreens,
  },
  {
    ...drawerNavigatorConfig,
    initialRouteName: 'Info',
  },
);

export const CartDrawerNavigator = createDrawerNavigator(
  {
    Cart: {
      screen: CartStackNavigator,
    },
    ...drawerNavigatorScreens,
  },
  {
    ...drawerNavigatorConfig,
    initialRouteName: 'Cart',
  },
);

export const ShopDrawerNavigator = createDrawerNavigator(
  {
    Shop: {
      screen: ShopStackNavigator,
    },
    ...drawerNavigatorScreens,
  },
  {
    ...drawerNavigatorConfig,
    initialRouteName: 'Shop',
  },
);

export const HomeDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
    },
    ...drawerNavigatorScreens,
  },
  {
    ...drawerNavigatorConfig,
    initialRouteName: 'Home',
  },
);

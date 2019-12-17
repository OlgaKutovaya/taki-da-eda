import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Home from '../screens/Home/Home';
import Product from '../screens/Shop/Products/Product';
import Shop from '../screens/Shop/Shop';
import ProductsList from '../screens/Shop/Products/ProductsList';
import SubcategoryList from '../screens/Shop/Products/SubcategoryList';
import ProductDetails from '../screens/Shop/Products/ProductDetails';
import ProductDetailsDescription from '../screens/Shop/Products/ProductDetailsDescription';
import Cart from '../screens/Cart/Cart';
import CheckoutUnregisteredUser from '../screens/Cart/CheckoutUnregisteredUser';
import Info from '../screens/Info/Info';
import HeaderRight from '../components/HeaderRight';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';

export const AuthNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: 'Вход',
      }),
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        title: 'Регистрация',
      }),
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
);

export const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Главная',
      }),
    },
    Product: {
      screen: Product,
      navigationOptions: () => ({
        title: 'Продукт',
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
);

export const ShopStackNavigator = createStackNavigator(
  {
    Shop: {
      screen: Shop,
      navigationOptions: () => ({
        title: 'Товары',
        headerBackTitle: null,
      }),
    },
    ProductsList: {
      screen: ProductsList,
      navigationOptions: () => ({
        title: 'Продукты',
        headerBackTitle: null,
      }),
    },
    Subcategory: {
      screen: SubcategoryList,
      navigationOptions: () => ({
        title: 'Подкатегории',
        headerBackTitle: null,
      }),
    },
    ProductDetails: {
      screen: ProductDetails,
      navigationOptions: () => ({
        title: 'Описание продукта',
        headerBackTitle: null,
      }),
    },
    ProductDetailsDescription: {
      screen: ProductDetailsDescription,
      navigationOptions: () => ({
        title: 'Детальное описание',
        headerBackTitle: null,
      }),
    },
  },
  {
    initialRouteName: 'Shop',
    defaultNavigationOptions: ({navigation}) => ({
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
);

export const CartStackNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: () => ({
        title: 'Корзина',
        headerBackTitle: null,
      }),
    },
    CheckoutUnregisteredUser: {
      screen: CheckoutUnregisteredUser,
      navigationOptions: () => ({
        title: 'Оформление заказа',
        headerBackTitle: null,
      }),
    },
  },
  {
    initialRouteName: 'Cart',
    defaultNavigationOptions: ({navigation}) => ({
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
);

export const InfoStackNavigator = createStackNavigator(
  {
    Info: {
      screen: Info,
      navigationOptions: () => ({
        title: 'Информация',
        headerBackTitle: null,
      }),
    },
  },
  {
    initialRouteName: 'Info',
    defaultNavigationOptions: ({navigation}) => ({
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
);

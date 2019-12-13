import React, {Component} from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import Home from './src/screens/Home/Home';
import Cart from './src/screens/Cart/Cart';
import SplashScreen from 'react-native-splash-screen';
import ProductsList from './src/screens/Shop/Products/ProductsList';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import MenuIcon from './assets/images/menuIcon.png';
import Shop from './src/screens/Shop/Shop';
import Product from './src/screens/Shop/Products/Product';
import Info from './src/screens/Info/Info';
import SubcategoryList from './src/screens/Shop/Products/SubcategoryList';
import ProductDetails from './src/screens/Shop/Products/ProductDetails';
import ProductDetailsDescription from './src/screens/Shop/Products/ProductDetailsDescription';
import WelcomeScreen from './src/screens/Welcome/Weilcome';
import CheckoutUnregisteredUser from './src/screens/Cart/CheckoutUnregisteredUser';

const styles = StyleSheet.create({
  itemImg: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
});

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Главная1',
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
    defaultNavigationOptions: {
      headerRight: (
        <TouchableOpacity>
          <Image
            source={MenuIcon}
            style={styles.itemImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
    },
  },
);

const ShopStackNavigator = createStackNavigator(
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
    defaultNavigationOptions: {
      headerRight: (
        <TouchableOpacity>
          <Image
            source={MenuIcon}
            style={styles.itemImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
    },
  },
);

const CartStackNavigator = createStackNavigator({
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
});

const AppInnerNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: () => ({
      title: 'Главная',
    }),
  },
  Shop: {
    screen: ShopStackNavigator,
    navigationOptions: () => ({
      title: 'Товары',
    }),
  },
  Cart: {
    screen: CartStackNavigator,
    navigationOptions: () => ({
      title: 'Корзина',
    }),
  },
  Info: {
    screen: Info,
    navigationOptions: () => ({
      title: 'Информация',
    }),
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    AppInner: {
      screen: AppInnerNavigator,
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

const Navigator = createAppContainer(AppNavigator);

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <Navigator />
      </>
    );
  }
}

export default App;

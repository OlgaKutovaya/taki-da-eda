import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Shop from './src/screens/Shop';
import Cart from './src/screens/Cart';
import Account from './src/screens/Account';
import Product from './src/screens/Product';

const HomeStackNavigator = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: () => ({
			title: `Главная`,
		}),
	},
	Product: {
		screen: Product,
		navigationOptions: () => ({
			title: `Продукт`,
		}),
	},
});

const ShopStackNavigator = createStackNavigator({
	Shop: {
		screen: Shop,
		navigationOptions: () => ({
			title: `Товары`,
		}),
	},

	Product: {
		screen: Product,
		navigationOptions: () => ({
			title: `Продукт`,
		}),
	},
});

const AppNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeStackNavigator,
		navigationOptions: () => ({
			title: `Главная`,
		}),
	},
	Shop: {
		screen: ShopStackNavigator,
		navigationOptions: () => ({
			title: `Товары`,
		}),
	},
	Cart: {
		screen: Cart,
		navigationOptions: () => ({
			title: `Корзина`,
		}),
	},
	Account: {
		screen: Account,
		navigationOptions: () => ({
			title: `Аккаунт`,
		}),
	},
});

export default createAppContainer(AppNavigator);

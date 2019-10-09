import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Shop from './screens/Shop';
import Cart from './screens/Cart';
import Account from './screens/Account';

const AppNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: () => ({
			title: `Главная`,
		}),
	},
	Shop: {
		screen: Shop,
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

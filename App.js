import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Shop from './src/screens/Shop';
import Cart from './src/screens/Cart';
import Product from './src/screens/Product';
import Info from './src/screens/Info';
import SubcategoryList from './src/screens/SubcategoryList';

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

	Subcategory: {
		screen: SubcategoryList,
		navigationOptions: () => ({

		}),
	}
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
	Info: {
		screen: Info,
		navigationOptions: () => ({
			title: `Информация`,
		}),
	},
});

export default createAppContainer(AppNavigator);

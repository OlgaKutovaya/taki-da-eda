import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { CartDrawerNavigator, HomeDrawerNavigator, InfoDrawerNavigator, ShopDrawerNavigator } from "./DrawerNavigators";

const AppInnerNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeDrawerNavigator,
		navigationOptions: () => ({
			resetOnBlur: true,
			title: "Главная",
			tabBarLabel: "Главная",
			tabBarIcon: ({ focused, tintColor }) => (
				<View><Text>Img1</Text></View>
			)
		})
	},
	Shop: {
		screen: ShopDrawerNavigator,
		navigationOptions: () => ({
			resetOnBlur: true,
			title: "Товары",
			tabBarLabel: "Товары",
			tabBarIcon: ({ focused, tintColor }) => (
				<View><Text>Img2</Text></View>
			)
		})
	},
	Cart: {
		screen: CartDrawerNavigator,
		navigationOptions: () => ({
			resetOnBlur: true,
			title: "Корзина",
			tabBarLabel: "Корзина",
			tabBarIcon: ({ focused, tintColor }) => (
				<View><Text>Img3</Text></View>
			)
		})
	},
	Info: {
		screen: InfoDrawerNavigator,
		navigationOptions: () => ({
			resetOnBlur: true,
			title: "Информация",
			tabBarLabel: "Информация",
			tabBarIcon: ({ focused, tintColor }) => (
				<View><Text>Img4</Text></View>
			)
		})
	}
}, {
	backBehavior: "initialRoute",
	tabBarOptions: {
		activeTintColor: "orange"
	},
	defaultNavigationOptions: () => ({
		tabBarOnPress: ({ navigation, defaultHandler }) => {
			if (navigation.state.isDrawerOpen) {
				navigation.closeDrawer();
			}
			navigation.navigate(navigation.state.key);
			defaultHandler();
		}
	})
});

export default AppInnerNavigator;
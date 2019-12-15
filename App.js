import React, { Component } from "react";
import {
	createDrawerNavigator,
	createBottomTabNavigator,
	createStackNavigator,
	createAppContainer,
	createSwitchNavigator
} from "react-navigation";
import { Provider } from "react-redux";
import Home from "./src/screens/Home/Home";
import Cart from "./src/screens/Cart/Cart";
import SplashScreen from "react-native-splash-screen";
import ProductsList from "./src/screens/Shop/Products/ProductsList";
import { Dimensions } from "react-native";
import Shop from "./src/screens/Shop/Shop";
import Product from "./src/screens/Shop/Products/Product";
import Info from "./src/screens/Info/Info";
import SubcategoryList from "./src/screens/Shop/Products/SubcategoryList";
import ProductDetails from "./src/screens/Shop/Products/ProductDetails";
import ProductDetailsDescription from "./src/screens/Shop/Products/ProductDetailsDescription";
import WelcomeScreen from "./src/screens/Welcome/Weilcome";
import CheckoutUnregisteredUser from "./src/screens/Cart/CheckoutUnregisteredUser";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import Drawer from "./src/components/Drawer";
import HeaderRight from "./src/components/HeaderRight";
import Orders from "./src/screens/Dashboard/Orders";
import Bonuses from "./src/screens/Dashboard/Bonuses";
import { View, Text } from "react-native";
import store from "./src/redux/store";
import { useScreens } from "react-native-screens";

useScreens();

const { width } = Dimensions.get("window");

const drawerNavigatorConfig = {
	backBehavior: "initialRoute",
	overlayColor: "rgba(0,0,0,0.35)",
	drawerWidth: width * 0.7,
	drawerPosition: "right",
	contentComponent: props => <Drawer {...props} />
};

const drawerNavigatorScreens = {
	Dashboard: {
		screen: Dashboard
	},
	Orders: {
		screen: Orders
	},
	Bonuses: {
		screen: Bonuses
	}
};

const HomeStackNavigator = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: () => ({
				title: "Главная"
			})
		},
		Product: {
			screen: Product,
			navigationOptions: () => ({
				title: "Продукт"
			})
		}
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: ({ navigation }) => ({
			headerRight: <HeaderRight navigation={navigation} />
		})
	}
);

const ShopStackNavigator = createStackNavigator(
	{
		Shop: {
			screen: Shop,
			navigationOptions: () => ({
				title: "Товары",
				headerBackTitle: null
			})
		},
		ProductsList: {
			screen: ProductsList,
			navigationOptions: () => ({
				title: "Продукты",
				headerBackTitle: null
			})
		},
		Subcategory: {
			screen: SubcategoryList,
			navigationOptions: () => ({
				title: "Подкатегории",
				headerBackTitle: null
			})
		},
		ProductDetails: {
			screen: ProductDetails,
			navigationOptions: () => ({
				title: "Описание продукта",
				headerBackTitle: null
			})
		},
		ProductDetailsDescription: {
			screen: ProductDetailsDescription,
			navigationOptions: () => ({
				title: "Детальное описание",
				headerBackTitle: null
			})
		}
	},
	{
		initialRouteName: "Shop",
		defaultNavigationOptions: ({ navigation }) => ({
			headerRight: <HeaderRight navigation={navigation} />
		})
	}
);

const CartStackNavigator = createStackNavigator({
	Cart: {
		screen: Cart,
		navigationOptions: () => ({
			title: "Корзина",
			headerBackTitle: null
		})
	},
	CheckoutUnregisteredUser: {
		screen: CheckoutUnregisteredUser,
		navigationOptions: () => ({
			title: "Оформление заказа",
			headerBackTitle: null
		})
	}
}, {
	initialRouteName: "Cart",
	defaultNavigationOptions: ({ navigation }) => ({
		headerRight: <HeaderRight navigation={navigation} />
	})
});

const InfoStackNavigator = createStackNavigator({
	Info: {
		screen: Info,
		navigationOptions: () => ({
			title: "Информация",
			headerBackTitle: null
		})
	}
}, {
	initialRouteName: "Info",
	defaultNavigationOptions: ({ navigation }) => ({
		headerRight: <HeaderRight navigation={navigation} />
	})
});

const InfoDrawerNavigator = createDrawerNavigator({
		Info: {
			screen: InfoStackNavigator
		},
		...drawerNavigatorScreens
	},
	{
		...drawerNavigatorConfig,
		initialRouteName: "Info"
	});


const CartDrawerNavigator = createDrawerNavigator({
		Cart: {
			screen: CartStackNavigator
		},
		...drawerNavigatorScreens
	},
	{
		...drawerNavigatorConfig,
		initialRouteName: "Cart"
	});

const ShopDrawerNavigator = createDrawerNavigator({
		Shop: {
			screen: ShopStackNavigator
		},
		...drawerNavigatorScreens
	},
	{
		...drawerNavigatorConfig,
		initialRouteName: "Shop"
	});

const HomeDrawerNavigator = createDrawerNavigator({
		Home: {
			screen: HomeStackNavigator
		},
		...drawerNavigatorScreens
	},
	{
		...drawerNavigatorConfig,
		initialRouteName: "Home"
	});

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
	resetOnBlur: false,
	backBehavior: "initialRoute",
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

const AppNavigator = createSwitchNavigator(
	{
		Welcome: {
			screen: WelcomeScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		AppInner: {
			screen: AppInnerNavigator
		}
	},
	{
		initialRouteName: "AppInner"
	}
);

const Navigator = createAppContainer(AppNavigator);

class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}

export default App;

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { useScreens } from "react-native-screens";
import SplashScreen from "react-native-splash-screen";
import store from "./src/redux/store";
import AppNavigator from "./src/navigation/AppNavigator";

useScreens();

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

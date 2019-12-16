import { createSwitchNavigator } from "react-navigation";
import WelcomeScreen from "../screens/Welcome/Welcome";
import AppInnerNavigator from "./AppInnerNavigator";

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

export default AppNavigator;
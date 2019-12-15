import React from "react";
import { Text, View } from "react-native";
import HeaderLeft from "../../components/HeaderLeft";

const Dashboard = ({ navigation }) => {
	return (
		<View>
			<HeaderLeft navigation={navigation} />
			<Text>Dashboard</Text>
		</View>
	);
};

export default Dashboard;
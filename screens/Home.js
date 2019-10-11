import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import Slider from '../components/Slider';
import SearchInput from '../components/SearchInput';
import HorizontalSlider from '../components/HorizontalSlider';

const { width } = Dimensions.get('window');

class Home extends Component {

	render() {
		return (
			<ScrollView style={styles.homeWrapper} contentContainerStyle={styles.homeContentWrapper}>
				<View style={styles.header}>
					<View style={styles.logoWrapper} />
					<Text style={styles.title}>
						Таки Да Еда
					</Text>
				</View>
				<Slider />
				<SearchInput />
				<HorizontalSlider />
				<HorizontalSlider />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	homeContentWrapper: {
		alignItems: 'center',
	},
	homeWrapper: {
		flex: 1
		// paddingTop: Platform.OS === 'ios' ? 60 : 0,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 20,
		marginHorizontal: 40,
		width: width * 0.9,
	},
	logoWrapper: {
		width: 70,
		height: 30,
		borderRadius: 5,
		opacity: 0.6,
		backgroundColor: 'darkgreen',
	},
	title: {
		fontSize: 25,
		color: 'darkgreen',
	},
});

export default Home;

import React, { Component } from 'react';
import {ScrollView, View, Text, StyleSheet, Platform, Dimensions, Image} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import SearchPanel from '../components/SearchPanel';
import ProductListSlider from '../components/ProductListSlider';
import Logo from '../../assets/images/logo.png';
import BannerFriday from '../components/BannerFriday';
import BannerSunday from '../components/BannerSunday';

const { width } = Dimensions.get('window');

class Home extends Component {

	renderHeader = () => {
		return (
			<View style={styles.header}>
				<View>
					<Image source={Logo} style={styles.logoIcon} resizeMode='contain' />
				</View>
				<Text style={styles.title}>
					ТАКИ ДА ЕДА
				</Text>
			</View>
		)
	};

	render() {
		return (
			<ScrollView style={styles.homeWrapper} contentContainerStyle={styles.homeContentWrapper}>
				{this.renderHeader()}
				<ImageSlider />
				<SearchPanel />
				<BannerFriday />
				<BannerSunday />
				<ProductListSlider />
				<ProductListSlider />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	homeWrapper: {
		flex: 1
		// paddingTop: Platform.OS === 'ios' ? 30 : 0,
	},
	homeContentWrapper: {
		alignItems: 'center',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 20,
		marginHorizontal: 40,
		width: width * 0.9,
		borderRadius: 2
	},
	logoIcon: {
		width: 40,
		height: 40
	},
	title: {
		fontSize: 23,
		fontWeight: 'bold',
		color: 'darkgreen',
	},
});

export default Home;

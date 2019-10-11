import React, { Component } from 'react';
import { Dimensions, FlatList, Text, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

const slideData = [
	'https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019-social-1200x630-1548169539.jpg',
	'https://assets.dmagstatic.com/wp-content/uploads/2019/09/iStock-913677844-677x451.jpg',
	'https://blog.myfitnesspal.com/wp-content/uploads/2018/01/UACF_EG_Hero_NoBadge_Portion-Control-752x472.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBD6MnqDPItH7fmy2vJ7SpKnc4eDcKYM2Ca6P8peUQG5sSnnzx',
];

class HorizontalSlider extends Component {

	renderRecommendation = (item, index) => {
		return (
			<View style={styles.recommendation}>
				<View style={styles.recommendationHeader}>
					<Image style={styles.recommendationImage} source={{ uri: item }} />
					<View style={styles.recommendationOptions}>
						<Text style={styles.productName}>
							Пармезан
						</Text>
						<Text style={styles.productName}>
							12 rub
						</Text>
					</View>
				</View>
			</View>
		)
	}


	renderRecommended = () => {
		return (
			<View style={styles.horizSliderContainer}>
				<View
					style={	styles.horizSliderHeader}
				>
					<Text style={{ fontSize: 26 }}>Новые товары</Text>
				</View>
				<View style={styles.recommendedList}>
					<FlatList
						horizontal
						pagingEnabled
						scrollEnabled
						showsHorizontalScrollIndicator={false}
						scrollEventThrottle={16}
						snapToAlignment="center"
						data={slideData}
						keyExtractor={(item, index) => `${item}`}
						renderItem={({ item, index }) => this.renderRecommendation(item, index)}
					/>
				</View>
			</View>
		);
	}


	render() {
		return 	this.renderRecommended()
	}

}

const styles = StyleSheet.create({
	recommendation: {
		marginHorizontal: 15
	},
	horizSliderContainer: {
		width: width * 0.9,


	},
	horizSliderHeader: {

	},
	recommendedList: {

	},
	recommendationHeader: {

	},
	recommendationImage: {
		width: 100,
		height: 200

	},
	recommendationOptions: {

	},
	productName: {

	}
});

export default HorizontalSlider;

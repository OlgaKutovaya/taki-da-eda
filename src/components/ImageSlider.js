import React, { Component } from 'react';
import { Animated, Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import InfiniteScroll from 'react-native-infinite-looping-scroll';

const { width } = Dimensions.get('window');

const slideData = [
	'https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019-social-1200x630-1548169539.jpg',
	'https://assets.dmagstatic.com/wp-content/uploads/2019/09/iStock-913677844-677x451.jpg',
	'https://blog.myfitnesspal.com/wp-content/uploads/2018/01/UACF_EG_Hero_NoBadge_Portion-Control-752x472.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBD6MnqDPItH7fmy2vJ7SpKnc4eDcKYM2Ca6P8peUQG5sSnnzx',
];

class ImageSlider extends Component {

	state = {
		slideIndex: 0,
		maxSlideIndex: 3,
	};

	listRef = null;
	scrollX = new Animated.Value(0);

	componentDidMount() {
		setInterval(() => {
			const { slideIndex, maxSlideIndex } = this.state;
			let nextIndex = 0;

			if (slideIndex < maxSlideIndex) {
				nextIndex = slideIndex + 1;
			}

			this.scrollToIndex(nextIndex, true);
			this.setState({ slideIndex: nextIndex });
		}, 3000);
	}

	renderDots() {
		const dotPosition = Animated.divide(this.scrollX, width);
		return (
			<View style={styles.dotsWrapper}>
				{slideData.map((item, index) => {
					const color = dotPosition.interpolate({
						inputRange: [index - 1, index, index + 1],
						outputRange: ['lightyellow', 'lightblue', 'lightyellow'],
						extrapolate: 'clamp',
					});
					return (
						<Animated.View
							key={`step-${item}`}
							style={[styles.dots, { backgroundColor: color }]}
						/>
					);
				})}
			</View>
		);
	}

	renderSliderItem = (item) => {
		return (
			<View style={styles.sliderItemWrapper}>
				<Image
					style={styles.sliderImg}
					source={{ uri: item }}
					resizeMode="cover"
				/>
			</View>
		);
	};

	scrollToIndex = (index, animated) => {
		//console.log(this.listRef.infListRef._listRef)
		//this.listRef && this.listRef.scrollToIndex({ index, animated });
	};

	render() {
		return (
			<View style={styles.sliderContainer}>
				<InfiniteScroll
					horizontal
					pagingEnabled
					scrollEnabled
					showsHorizontalScrollIndicator={false}
					snapToAlignment='center'
					scrollEventThrottle={16}
					ref={c => this.listRef = c}
					style={styles.slider}
					data={slideData}
					keyExtractor={(item, index) => `${index}`}
					renderItem={({ item }) => this.renderSliderItem(item)}
					onScroll={
						Animated.event([{
							nativeEvent: { contentOffset: { x: this.scrollX } },
						}])
					}
				/>
				{this.renderDots()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	sliderContainer: {
		width: width,
		height: width * 0.5,
	},
	slider: {
		overflow: 'visible',
		flex: 1,
	},
	sliderItemWrapper: {
		width: width,
		height: width * 0.5,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	sliderImg: {
		width: width * 0.9,
		height: width * 0.5,
	},
	dotsWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
	},
	dots: {
		width: 7, height: 7,
		marginHorizontal: 2,
		borderRadius: 10,
		backgroundColor: 'blue',
		borderWidth: 0,
	},
});

export default ImageSlider;

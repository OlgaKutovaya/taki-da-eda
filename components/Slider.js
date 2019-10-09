import React, {Component} from 'react';
import {Animated, Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';

const {height, width} = Dimensions.get('window');

const slideData = [
    'https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019-social-1200x630-1548169539.jpg',
    'https://assets.dmagstatic.com/wp-content/uploads/2019/09/iStock-913677844-677x451.jpg',
    'https://blog.myfitnesspal.com/wp-content/uploads/2018/01/UACF_EG_Hero_NoBadge_Portion-Control-752x472.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBD6MnqDPItH7fmy2vJ7SpKnc4eDcKYM2Ca6P8peUQG5sSnnzx',
];

class Slider extends Component {

    scrollX = new Animated.Value(0);

    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, width);
        return (
            <View style={styles.dotsWrapper}>
                {slideData.map((item, index) => {
                    const color = dotPosition.interpolate({
                        inputRange: [index -1, index, index + 1],
                        outputRange: ['lightyellow', 'lightblue', 'lightyellow'],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View
                            key={`step-${item}`}
                            style={[styles.dots, { backgroundColor: color }]}
                        />
                    )
                })}
            </View>
        )
    }

    renderSliderItem = (item) => {
        return (
            <View style={[styles.sliderItemWrapper, {width: width}]}>
                <Image
                    style={styles.sliderImg}
                    source={{uri: item}}
                />
            </View>
        )
    };

    render() {
        return (
            <View style={styles.sliderContainer}>
                <FlatList
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment='center'
                    data={slideData}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item }) => this.renderSliderItem(item)}
                    onScroll={
                        Animated.event([{
                            nativeEvent: { contentOffset: { x: this.scrollX } }
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
        // backgroundColor: 'yellow',
        width: width,
        height: 200
    },
    sliderItemWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    sliderImg: {
        width: 300,
        height: 200
    },
    dotsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -15,
        marginBottom: 35
    },
    dots: {
        width: 7, height: 7,
        marginHorizontal: 1,
        borderRadius:10,
        backgroundColor: 'blue',
        borderWidth: 0
    }
});

export default Slider;

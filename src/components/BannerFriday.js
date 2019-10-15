import React, {Component} from 'react';
import {Dimensions, Text, Image, StyleSheet, View} from 'react-native';
import Food1 from '../../assets/images/food1.jpg';

const { width } = Dimensions.get('window');
const discountDay = '15.11.2019';

class BannerFriday extends Component {
    render() {
        return (
            <View style={styles.bannerContainer}>
                <View style={styles.imgWrapper}>
                    <Image source={Food1} style={styles.foodIcon} resizeMode='cover' />
                </View>
                <View style={styles.textWrapper}>
                        <Text style={styles.title}>скидка на продукт</Text>
                        <Text style={styles.subtext}>в эту пятницу {discountDay}</Text>
                        <Text style={styles.subtext2}>5%</Text>
                </View>
            </View>
        );
    }
}

export default BannerFriday;

const styles = StyleSheet.create({
    bannerContainer: {
        width: width * 0.9,
        height: 150,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 3,
        backgroundColor: '#800000'
    },
    imgWrapper: {
        width: '45%'
    },
    foodIcon: {
        width: '100%',
        height: 150,
        borderRadius: 3
    },
    textWrapper: {
        width: '55%',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginTop: 30,
        marginBottom: 3,
        textTransform: 'uppercase',
        color: 'lightyellow'
    },
    subtext: {
        marginBottom: 10,
        fontStyle: 'italic',
        color: 'lightyellow',
        fontSize: 12,
    },
    subtext2: {
        color: 'lightyellow',
        fontSize: 40,
    }
});

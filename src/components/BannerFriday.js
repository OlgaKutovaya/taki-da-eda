import React, {Component} from 'react';
import {Dimensions, Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Food1 from '../../assets/images/food1.jpg';

const {width} = Dimensions.get('window');
const discountDay = '15.11.2019';

class BannerFriday extends Component {
    render() {
        return (
            <View style={styles.bannerContainer}>
                <View style={styles.imgWrapper}>
                    <Image source={Food1} style={styles.foodIcon} resizeMode='cover'/>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>скидка</Text>
                    <Text style={styles.title}>на продукт</Text>
                    <Text style={styles.subtext}>в эту пятницу</Text>
                    <Text style={styles.subtext}>{discountDay}</Text>
                    <View>
                        <Text style={styles.discountText}>5%</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default BannerFriday;

const styles = StyleSheet.create({
    bannerContainer: {
        width: width * 0.9,
        height: 170,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 3,
        backgroundColor: '#800000',
    },
    imgWrapper: {
        width: '45%',
    },
    foodIcon: {
        width: '100%',
        height: 170,
        borderRadius: 3,
    },
    textWrapper: {
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        lineHeight: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'lightyellow',
    },
    subtext: {
        lineHeight: 22,
        fontStyle: 'italic',
        color: 'lightyellow',
        fontSize: 16,
    },
    discountText: {
        color: 'lightyellow',
        marginTop: 7,
        fontSize: 40,
    },
});

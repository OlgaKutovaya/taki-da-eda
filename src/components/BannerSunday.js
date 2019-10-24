import React, {Component} from 'react';
import {Dimensions, Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Food2 from '../../assets/images/food2.jpg';

const {width} = Dimensions.get('window');

class BannerSunday extends Component {

    onPress = () => {
        alert('sunday banner');
    };

    render() {
        return (
            <TouchableOpacity style={styles.bannerContainer} onPress={this.onPress}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>рецепт</Text>
                    <Text style={styles.title}>выходного дня</Text>
                    <Text style={styles.subtext}>будет доступен</Text>
                    <Text style={styles.subtext}>в это воскресенье</Text>
                    <View
                        style={styles.btn}>
                        <Text style={styles.searchButtonText}>
                            смотреть рецепт
                        </Text>
                    </View>
                </View>
                <View style={styles.imgWrapper}>
                    <Image source={Food2} style={styles.foodIcon} resizeMode='contain'/>
                </View>
            </TouchableOpacity>
        );
    }
}

export default BannerSunday;

const styles = StyleSheet.create({
    bannerContainer: {
        width: width * 0.9,
        height: 170,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 3,
        backgroundColor: 'darkgreen',
    },
    imgWrapper: {
        width: '45%',
        paddingRight: 7,
    },
    foodIcon: {
        width: '100%',
        height: 170,
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
        marginTop: 2,
        fontStyle: 'italic',
        color: 'lightyellow',
        fontSize: 16,
    },
    subtext2: {
        color: 'lightyellow',
        fontSize: 40,
    },
    btn: {
        width: 160,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(142, 142, 147, 0.7)',
        borderColor: 'rgba(142, 142, 147, 0.6)',
    },
    searchButtonText: {
        fontSize: 16,
        color: 'lightyellow',
    },
});

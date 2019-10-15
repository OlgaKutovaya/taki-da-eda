import React, {Component} from 'react';
import {Dimensions, Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Food2 from '../../assets/images/food2.jpg';

const { width } = Dimensions.get('window');

class BannerSunday extends Component {

    onPress = () => {
        alert('search')
    };

    render() {
        return (
            <View style={styles.bannerContainer}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>рецепт</Text>
                    <Text style={styles.title}>выходного дня</Text>
                    <Text style={styles.subtext}>будет доступен в это воскресенье</Text>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.onPress}>
                        <Text style={styles.searchButtonText}>
                            смотреть рецепт
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgWrapper}>
                    <Image source={Food2} style={styles.foodIcon} resizeMode='contain' />
                </View>
            </View>
        );
    }
}

export default BannerSunday;

const styles = StyleSheet.create({
    bannerContainer: {
        width: width * 0.9,
        height: 150,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 3,
        backgroundColor: 'darkgreen'
    },
    imgWrapper: {
        width: '45%',
        paddingRight: 7
    },
    foodIcon: {
        width: '100%',
        height: 150
    },
    textWrapper: {
        width: '55%',
        alignItems: 'center',
        paddingTop: 25
    },
    title: {
        fontSize: 16,
        marginBottom: 3,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'lightyellow'
    },
    subtext: {
        marginBottom: 10,
        fontStyle: 'italic',
        color: 'lightyellow',
        fontSize: 10,
    },
    subtext2: {
        color: 'lightyellow',
        fontSize: 40,
    },
    btn: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(142, 142, 147, 0.7)',
        borderColor: 'rgba(142, 142, 147, 0.6)'
    },
    searchButtonText: {
        fontSize: 12,
        color: 'lightyellow'
    }
});

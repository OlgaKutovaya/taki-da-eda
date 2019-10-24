import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, View, Text, StyleSheet, Platform, Dimensions, Image} from 'react-native';
import SearchPanel from '../components/SearchPanel';
import ProductListSlider from '../components/ProductListSlider';
import MenuIcon from '../../assets/images/menuIcon.png';
import BannerFriday from '../components/BannerFriday';
import BannerSunday from '../components/BannerSunday';
import SwiperComponent from '../components/SwiperComponent';

const {width} = Dimensions.get('window');

class Home extends Component {

    renderHeader = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={MenuIcon} style={styles.menuIcon} resizeMode='contain'/>
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoTitle}>Таки Да Еда</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <ScrollView
                style={styles.homeWrapper}
                contentContainerStyle={styles.homeContentWrapper}
            >
                {this.renderHeader()}
                <SwiperComponent/>
                <SearchPanel/>
                <BannerFriday/>
                <BannerSunday/>
                <ProductListSlider/>
                <ProductListSlider/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'darkgreen'
    },
    homeWrapper: {
        flex: 1
    },
    homeContentWrapper: {
        alignItems: 'center'
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
    menuIcon: {
        width: 45,
        height: 45
    }
});

export default Home;

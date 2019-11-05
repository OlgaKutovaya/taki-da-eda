import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import SearchPanel from '../../components/SearchPanel';
import ProductListSlider from '../../components/ProductListSlider';
import BannerFriday from '../../components/BannerFriday';
import BannerSunday from '../../components/BannerSunday';
import SwiperComponent from '../../components/SwiperComponent';
import Logo from '../../components/Logo';

class Home extends Component {
    render() {
        return (
            <ScrollView
                style={{flex: 1}}
                contentContainerStyle={{alignItems: 'center'}}
            >
               <Logo/>
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

export default Home;

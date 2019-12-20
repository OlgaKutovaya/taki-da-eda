import React, {Component} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from '../styles/components/SwiperComponentStyles';
import BannerWelcome from './banners/BannerWelcome';
import BannerFriday from './banners/BannerFriday';
import BannerSunday from './banners/BannerSunday';

export class SwiperComponent extends Component {
  render() {
    return (
      <View style={styles.swiperContainer}>
        <Swiper
          showsButtons={false}
          dot={<View style={styles.dotInactive} />}
          activeDot={<View style={styles.dotActive} />}
          containerStyle={styles.wrapper}
          autoplay={true}>
          <View style={styles.slide}>
            <BannerWelcome />
          </View>
          <View style={styles.slide}>
            <BannerFriday />
          </View>
          <View style={styles.slide}>
            <BannerSunday />
          </View>
        </Swiper>
      </View>
    );
  }
}

export default SwiperComponent;

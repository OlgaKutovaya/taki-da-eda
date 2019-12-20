import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/components/banners/WelcomBannerStyles';
import BannerWrapper from './BannerWrapper';

class BannerWelcome extends Component {
  render() {
    return (
      <BannerWrapper style={styles.bannerWelcomeContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>ДОСТАВКА ЗАГРАНИЧНЫХ</Text>
          <Text style={styles.title}>ПРОДУКТОВ</Text>
          <Text style={styles.title}>в удобное для Вас время</Text>
          <Text style={styles.title}>Мы любим наших клиентов!</Text>
        </View>
      </BannerWrapper>
    );
  }
}

export default BannerWelcome;

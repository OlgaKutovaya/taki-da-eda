import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import Food2 from '../../../assets/images/food/food2.jpg';
import {styles} from '../../styles/components/banners/BannerSundayStyles';
import BannerWrapper from './BannerWrapper';

class BannerSunday extends Component {
  onPress = () => {
    alert('sunday banner');
  };

  render() {
    return (
      <BannerWrapper
        style={styles.bannerSundayContainer}
        onPress={this.onPress}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>рецепт</Text>
          <Text style={styles.title}>выходного дня</Text>
          <Text style={styles.subtext}>будет доступен</Text>
          <Text style={styles.subtext}>в это воскресенье</Text>
          <View style={styles.btn}>
            <Text style={styles.searchButtonText}>смотреть рецепт</Text>
          </View>
        </View>
        <View style={styles.imgWrapper}>
          <Image source={Food2} style={styles.foodIcon} resizeMode="contain" />
        </View>
      </BannerWrapper>
    );
  }
}

export default BannerSunday;

import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import Food1 from '../../assets/images/food1.jpg';
import {styles} from '../styles/components/BannerFridayStyles';

const discountDay = '15.11.2019';

class BannerFriday extends Component {
  render() {
    return (
      <View style={styles.bannerContainer}>
        <View style={styles.imgWrapper}>
          <Image source={Food1} style={styles.foodIcon} resizeMode="cover"/>
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

import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../../styles/screens/cart/CartItemStyles';
import icon from '../../../assets/images/food/cheese-2.jpg';

class CartItem extends Component {
  render() {
    return (
      <View style={styles.cartItemWrapper}>
        <Image source={icon} style={styles.productImg} resizeMode="cover" />
        <View style={styles.detailsWrapper}>
          <View style={styles.productDetails}>
            <View style={styles.productDetailsNamePriceWeight}>
              <Text style={styles.productDetailsName}>Сыр Пармезан</Text>
              <View style={styles.productDetailsDefaultPriceWeight}>
                <Text style={styles.productDetailsDefaultWeightText}>
                  100 гр. /{' '}
                </Text>
                <Text style={styles.productDetailsDefaultPriceText}>
                  170 грн.{' '}
                </Text>
              </View>
            </View>
            <View style={styles.productPriceCartWrapper}>
              <Text style={styles.productPriceCartText}>595 грн</Text>
            </View>
          </View>
          <View style={styles.counter} />
        </View>
      </View>
    );
  }
}

export default CartItem;

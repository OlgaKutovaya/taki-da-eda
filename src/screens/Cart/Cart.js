import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import {styles} from '../../styles/screens/cart/CartStyles';
import CartItem from './CartItem';
import emptyCart from '../../../assets/images/cart/emptyCart.jpg';
import {withNavigation} from 'react-navigation';

class Cart extends Component {
  state = {
    countProducts: 3,
    totalPrice: 790,
    cartFull: true,
  };

  renderCartHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <View style={styles.innerHeaderWrapper}>
          <Text style={styles.headerTitle}>Всего товаров: </Text>
          <Text style={styles.headerTitleCount}>
            {this.state.countProducts}{' '}
          </Text>
        </View>
        <Text style={styles.headerText}>
          Доставка осуществляется при оформлении заказа на сумму от 500 гривен
        </Text>
      </View>
    );
  };

  renderCartFooter = () => {
    return (
      <View style={styles.footerWrapper}>
        <Text style={styles.footerTitle}>Сумма заказа:</Text>
        <View style={styles.footerTotalPriceWrapper}>
          <Text style={styles.footerTotalPriceCount}>1785 грн.</Text>
        </View>
      </View>
    );
  };

  renderCartFullButtons = () => {
    return (
      <View style={styles.cartButtonsWrapper}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('CheckoutUnregisteredUser')
          }
          style={[styles.cartBtn, styles.cartBtnCheckout]}>
          <Text style={styles.cartBtnText}>Перейти к оформлению заказа</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cartBtn, styles.cartBtnCancel]}>
          <Text style={styles.cartBtnText}>очистить корзину</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderFullCart = () => {
    return (
      <View>
        {this.renderCartHeader()}
        <CartItem />
        <CartItem />
        <CartItem />
        {this.renderCartFooter()}
        {this.renderCartFullButtons()}
      </View>
    );
  };

  renderEmptyCart = () => {
    return (
      <View style={styles.emptyCartWrapper}>
        <Text style={styles.emptyCartText}>
          В вашей корзине пока нет товаров
        </Text>
        <Image
          source={emptyCart}
          style={styles.emptyCartImg}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.cartEmptyBtn}>
          <Text style={styles.cartBtnText}>перейти к товарам</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.cartScreenWrapper}>
        <ScrollView>
          <View style={styles.cartContentWrapper}>
            {this.state.cartFull
              ? this.renderFullCart()
              : this.renderEmptyCart()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Cart);

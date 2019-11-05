import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {styles} from '../../styles/screens/cart/CartStyles';

class Cart extends Component {
    state = {
        countProducts: 2,
        totalPrice: 790,
        cartFull: true
    };

    renderCartHeader = () => {
        return (
            <View style={styles.headerWrapper}>
                <View style={styles.innerHeaderWrapper}>
                    <Text style={styles.headerTitle}>Всего товаров: </Text>
                        <Text style={styles.headerTitleCount}>{this.state.countProducts} </Text>
                </View>
                <Text style={styles.headerText}>
                    Доставка осуществляется при оформлении заказа на сумму от 500 гривен
                </Text>
            </View>
        );
    };

    renderCartItems = () => {
        return (
            <View>
                <Text>Product info</Text>
            </View>
        );
    };

    renderFullCart = () => {
        return (
            <View>
                {this.renderCartHeader()}
            </View>
        )
    };

    renderEmptyCart = () => {
        return (
            <View>
                <Text>
                    В вашей корзине пока нет товаров
                </Text>
            </View>
        )
    };

    render() {
        return (
            <ScrollView style={styles.cartScreenWrapper}>
                <View style={styles.cartContentWrapper}>
                    {this.state.cartFull
                        ? this.renderFullCart()
                        : this.renderEmptyCart()
                    }
                </View>
            </ScrollView>
        );
    }
}

export default Cart;

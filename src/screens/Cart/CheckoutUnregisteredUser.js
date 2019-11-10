import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../../styles/screens/cart/CheckoutUnregisteredUserStyles';

class CheckoutUnregisteredUser extends Component {
    render() {
        return (
            <View>
                <Text>В корзине 2 товара на сумму 1785 грн.</Text>

            </View>
        );
    }
}

export default CheckoutUnregisteredUser;

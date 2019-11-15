import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from '../../styles/screens/cart/CheckoutUnregisteredUserStyles';
import cartFull from '../../../assets/images/cartFull.jpg';

class CheckoutUnregisteredUser extends Component {

    renderCheckoutHeader = () => {
        return (
            <View style={styles.checkoutHeaderWrapper}>
                <Image source={cartFull} style={styles.checkoutHeaderImage} resizeMode='contain'/>
                <View style={styles.checkoutHeaderContent}>
                    <Text style={styles.checkoutHeaderText}>
                        Всего товаров:{' '}
                        <Text style={[styles.checkoutHeaderText, styles.checkoutHeaderCountText]}>
                            {3}
                        </Text>
                    </Text>
                    <Text style={styles.checkoutHeaderText}>
                        На сумму:{' '}
                        <Text style={[styles.checkoutHeaderText, styles.checkoutHeaderPriceText]}>
                            {1785}
                        </Text>
                        {' '}грн.
                    </Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <ScrollView style={styles.checkoutScreenWrapper}>
                <View style={styles.checkoutContentWrapper}>
                    {this.renderCheckoutHeader()}
                </View>
            </ScrollView>
        );
    }
}

export default CheckoutUnregisteredUser;

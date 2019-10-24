import React, {Component} from 'react';
import {TouchableOpacity, ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const cartProductList = [
    {
        title: 'Сыр Пармезан',
        categoryWeight: true,
        weight: 100,
        price: 170,
        cartProductWeight: 450,
        cartProductPrice: 595,
    },
    {
        title: 'Сыр Фета',
        categoryWeight: false,
        weight: 270,
        price: 170,
        cartProductWeight: 450,
        cartProductPrice: 595,
    },
];

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

const styles = StyleSheet.create({
    cartScreenWrapper: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    cartContentWrapper: {
        alignItems: 'center',
        paddingTop: 25
    },
    headerWrapper: {
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'darkgreen',
        width: width * 0.9
    },
    innerHeaderWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 22,
        letterSpacing: 1
    },
    headerTitleCount: {
        fontSize: 25,
        color: 'darkred',
        fontWeight: 'bold'
    },
    headerText: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: 'darkred',
        fontStyle: 'italic'
    }
});

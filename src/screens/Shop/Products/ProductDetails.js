import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, View, Text, Image} from 'react-native';
import {styles} from '../../../styles/screens/shop/products/ProductDetailsStyles';
import countMinus from '../../../../assets/images/minus.jpg';
import countPlus from '../../../../assets/images/plus.jpg';

class ProductDetails extends Component {

    state = {
        weight: false,
        initialWeight: 300,
        initialQuantity: 1
    };

    onIncreaseQuantity = () => {
        if (this.state.weight) {
            this.setState({
                initialWeight: this.state.initialWeight + 50
            })
        } else {
            this.setState({
                initialQuantity: this.state.initialQuantity + 1
            })
        }
    };

    onDecreaseQuantity = () => {
        if (this.state.weight) {
            if (this.state.initialWeight > 300) {
                this.setState({
                    initialWeight: this.state.initialWeight - 50
                })
            } else {
                alert('минимальное количество для заказа 300 гр.')
            }
        } else {
            if (this.state.initialQuantity > 1) {
                this.setState({
                    initialQuantity: this.state.initialQuantity - 1
                })
            } else {
                alert('минимальное количество для заказа 1 шт.')
            }
        }
    };

    renderHeader = (name, weight, price) => {
        return (
            <View style={styles.header}>
                <View>
                    <Text style={styles.productName}>
                        {name}
                    </Text>
                    <Text style={styles.productWeight}>
                        {weight} гр.
                    </Text>
                </View>
                <View style={styles.productPriceContainer}>
                    <Text style={styles.productPrice}>
                        {price} грн.
                    </Text>
                </View>
            </View>
        );
    };

    renderContent = () => {
        return (
            <>
                <Text style={styles.pricePerGrText}>
                    Цена указана за 100 грамм продукта
                </Text>
                <Text style={styles.minWeightOrderText}>
                    Минимальный вес для заказа - 100 грамм
                </Text>
                <TouchableOpacity style={styles.addToFavouriteWrapper}>
                    <Text>Добавить товар в избранные</Text>
                </TouchableOpacity>
            </>
        );
    };

    renderShortDescription = (shortConsist) => {
        return (
            <View style={styles.consistDescriptionWrapper}>
                <Text style={styles.consistDescriptionTitle}>Состав:{" "}
                    <Text style={styles.consistDescriptionText}>
                        {shortConsist}
                    </Text>
                </Text>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('ProductDetailsDescription')
                    }
                    style={styles.goToFullDescriptionBtn}
                >
                    <Text style={styles.goToFullDescriptionBtnText}>Подробнее</Text>
                </TouchableOpacity>
            </View>
        );
    };

    renderAddToCartCounter = () => {
        return (
            <View style={styles.counterContentWrapper}>
                <View style={styles.counterContent}>
                    <Text style={styles.counterTitle}>Количество:</Text>
                    <View style={styles.counter}>
                        <TouchableOpacity onPress={() => this.onDecreaseQuantity()}>
                            <Image source={countMinus} style={styles.countImg} resizeMode='contain'/>
                        </TouchableOpacity>
                        <Text style={styles.counterQuantity}>
                            {this.state.weight
                                ? this.state.initialWeight
                                : this.state.initialQuantity
                            }
                        </Text>
                        <TouchableOpacity onPress={() => this.onIncreaseQuantity()}>
                            <Image source={countPlus} style={styles.countImg} resizeMode='contain'/>
                        </TouchableOpacity>
                        <Text style={styles.measureText}>
                            {this.state.weight ? 'гр.' : 'шт.'}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.addToCartBtn}>
                    <Text style={styles.addToCartBtnText}>
                        Добавить в корзину
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const {product} = this.props.navigation.state.params;
        return (
            <ScrollView>
                <View style={styles.productDetailsWrapper}>
                    <View style={styles.content}>
                        <Image source={{uri: product.image}} style={styles.productImg} resizeMode='cover'/>
                        <View style={styles.productDetailsInnerWrapper}>
                            {this.renderHeader(product.name, product.weight, product.price)}
                            {this.renderContent()}
                        </View>
                        {this.renderShortDescription(product.shortConsist)}
                        {this.renderAddToCartCounter()}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ProductDetails;



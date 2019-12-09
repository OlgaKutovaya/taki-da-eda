import React, {Component} from 'react';
import {styles} from '../../../styles/screens/shop/products/ProductDetailsDescriptionStyles';
import {ScrollView, View, Text, Image} from 'react-native';

class ProductDetailsDescription extends Component {
    render() {
        const {product} = this.props.navigation.state.params;
        return (
            <ScrollView>
                <View style={styles.wrapper}>
                    <View style={styles.content}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>{product.name}</Text>
                            <Image source={{uri: product.image}} style={styles.titleImg} resizeMode='cover'/>
                        </View>
                        <View style={styles.descriptionWrapper}>
                            <View style={styles.descriptionBlock}>
                                <Text style={styles.descriptionTitle}>
                                    Описание
                                </Text>
                                <Text style={styles.descriptionContent}>
                                    {product.shortIngredients}
                                </Text>
                            </View>
                            <View style={styles.descriptionBlock}>
                                <Text style={styles.descriptionTitle}>
                                    Ингредиенты
                                </Text>
                                <Text style={styles.descriptionContent}>
                                    {product.ingredients}
                                </Text>
                            </View>
                            <View style={styles.descriptionBlock}>
                                <Text style={styles.descriptionTitle}>
                                    Витамины
                                </Text>
                                <Text style={styles.descriptionContent}>
                                    {product.vitamins}
                                </Text>
                            </View>
                            <View style={styles.descriptionBlock}>
                                <Text style={styles.descriptionTitle}>
                                    Хранение
                                </Text>
                                <Text style={styles.descriptionContent}>
                                    {product.howToStore}
                                </Text>
                            </View>
                            <View style={styles.descriptionBlock}>
                                <Text style={styles.descriptionTitle}>
                                    Использование
                                </Text>
                                <Text style={styles.descriptionContent}>
                                    {product.usage}
                                </Text>
                            </View>
                            <View style={styles.descriptionBlock}>
                                <Text style={styles.descriptionTitle}>
                                    Дополнительная информация
                                </Text>
                                <Text style={styles.descriptionContent}>
                                    {product.additionalInfo}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ProductDetailsDescription;

import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {withNavigation} from "react-navigation";
import {palette} from '../../../styles/palette';

const {width} = Dimensions.get('window');

class Product extends Component {
    render() {
        const {item} = this.props;
        return (
                <TouchableOpacity style={styles.productWrapper}
                                  onPress={() =>
                                      this.props.navigation.navigate('ProductDetails', {product: item})}
                >
                    <View style={styles.productCard}>
                        <Image source={{uri: item.image}} style={styles.productImg} resizeMode='cover'/>
                        <Text style={styles.title}>{item.name}</Text>
                        <View style={styles.productDetailsWrapper}>
                            <Text style={styles.productWeight}>{item.weight} гр.</Text>
                            <Text style={styles.productPrice}>{item.price} грн.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        );
    }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
    productWrapper: {
        width: width/2,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    productCard: {
        paddingBottom: 3,
        height: 220,
        borderBottomWidth: 2,
        borderColor: palette.gallery,
    },
    productImg: {
        width: '100%',
        height: 120,
        marginBottom: 7
    },
    title: {
        paddingLeft: 7,
        marginBottom: 10,
        color: palette.seaGreen,
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    productDetailsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        paddingVertical: 10,
    },
    productWeight: {
        fontSize: 15,
        color: palette.seaGreen
    },
    productPrice: {
        fontSize: 15,
        color: palette.burntUmber,
        fontStyle: 'italic'
    }
});

import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {styles} from '../../../styles/screens/shop/products/ProductStyles';

class Product extends Component {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        style={styles.productWrapper}
        onPress={() =>
          this.props.navigation.navigate('ProductDetails', {product: item})
        }>
        <View style={styles.productCard}>
          <Image
            source={{uri: item.image}}
            style={styles.productImg}
            resizeMode="cover"
          />
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

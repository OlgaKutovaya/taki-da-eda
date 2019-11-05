import React, {Component} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import FoodIcon from '../../../../assets/images/cheese.jpg';
import Product from './Product';
import SearchPanel from '../../../components/SearchPanel';

class ProductsList extends Component {

    flatListKeyExtractor = item => item.name;

    flatListRenderItem = ({item}) => <Product item={item}/>;

    renderEmpty = () => {
        return (<Text>No products found</Text>);
    };

    render() {
        return (
            <>
                <SearchPanel/>
                <FlatList
                    style={{flex: 1}}
                    data={this.props.navigation.state.params.list}
                    keyExtractor={this.flatListKeyExtractor}
                    renderItem={this.flatListRenderItem}
                    ListEmptyComponent={this.renderEmpty}
                    numColumns={2}
                />
            </>
        );
    }
}

export default withNavigation(ProductsList);

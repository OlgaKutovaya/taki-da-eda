import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import SearchPanel from '../SearchPanel';
import FoodIcon from '../../../assets/images/cheese.jpg';
import Data from '../../../public/API/products';

class FoodComponent extends Component {
    state = {
        data: Data,
    };

    renderProductCategories = () => {
        const {subCategoryList} = this.state.data;
        return (
            <TouchableOpacity
                // onPress={() => this.props.navigation.navigate('Subcategory', {list: subCategoryList})}
            >
                {this.state.data.map((item, index) => {
                    return (
                        <View key={index} style={styles.categoryWrapper}>
                            <Image source={FoodIcon} style={styles.categoryIcon} resizeMode='contain'/>
                            <Text style={styles.categoryTitle}>{item.categoryName}</Text>
                            <View style={styles.countProductWrapper}>
                                <Text style={styles.countProductText}>{item.categoryQuantity}</Text>
                            </View>
                        </View>
                    );
                })}
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <ScrollView style={styles.wrapper}
                        contentContainerStyle={styles.contentWrapper}
            >
                <SearchPanel/>
                <View style={styles.categoryListWrapper}>
                    {this.renderProductCategories()}
                </View>
            </ScrollView>
        );
    }
}

export default withNavigation(FoodComponent);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    contentWrapper: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    categoryListWrapper: {
        width: '100%',
        marginVertical: 15,
    },
    categoryWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: 'grey',
        borderTopWidth: 1,
    },
    categoryIcon: {
        width: 60,
        height: 60,
        marginLeft: 10,
    },
    categoryTitle: {
        fontSize: 16,
        color: 'darkgreen',
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 1,
    },
    countProductWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 60,
        height: 30,
        backgroundColor: 'lightyellow',
        borderRadius: 20,
    },
    countProductText: {
        color: 'darkred',
        fontSize: 15,

    },
});

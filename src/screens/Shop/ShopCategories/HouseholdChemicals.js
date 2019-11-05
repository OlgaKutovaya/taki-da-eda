import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, View, Text, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import SearchPanel from '../../../components/SearchPanel';
import Data from '../../../../public/API/householdChemicals';
import {styles} from '../../../styles/screens/shop/shopCategories/categoryListStyle';

class HouseholdChemicals extends Component {
    state = {
        data: Data,
    };

    renderProductCategories = () => {
        const {data} = this.state;
        return data.map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={styles.categoryWrapper}
                    onPress={() => this.props.navigation.navigate('Subcategory', {list: item.subCategoryList})}
                >
                    <View style={{width: 65, height: 65}}>
                        <Image source={{uri: item.image}} style={styles.categoryIcon} resizeMode='cover'/>
                    </View>
                    <Text style={styles.categoryTitle}>{item.categoryName}</Text>
                </TouchableOpacity>
            );
        })
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

export default withNavigation(HouseholdChemicals);

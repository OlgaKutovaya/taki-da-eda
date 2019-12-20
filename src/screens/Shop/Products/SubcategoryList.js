import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, View, Text, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import SearchPanel from '../../../components/SearchPanel';
import {styles} from '../../../styles/screens/shop/shopCategories/categoryListStyle';

class SubcategoryList extends Component {
  render() {
    return (
      <ScrollView>
        <SearchPanel />
        {this.props.navigation.state.params.list.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.categoryWrapper}
              onPress={() =>
                this.props.navigation.navigate('ProductsList', {
                  list: item.detailsList,
                })
              }>
              <View style={{width: 65, height: 65}}>
                <Image
                  source={{uri: item.image}}
                  style={styles.categoryIcon}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

export default withNavigation(SubcategoryList);

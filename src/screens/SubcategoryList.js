import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {withNavigation} from "react-navigation";

class SubcategoryList extends Component {
    render() {
        console.log('PROPS!!!', this.props.navigation.state.params);
        return (
            <View>
                {this.props.navigation.state.params.list.map((item) => {
                return (
                    <Text>{item.title}</Text>
                )
            })}
            </View>
        );
    }
}

export default withNavigation(SubcategoryList);

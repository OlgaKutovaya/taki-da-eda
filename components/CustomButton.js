import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class CustomButton extends Component {

    onPress = () => {
        alert('search')
    };

    render() {
        return (
            <TouchableOpacity
                style={styles.searchButton}
                onPress={this.onPress}>
                <Text>поиск продуктов по категориям</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    searchButton: {

    }
});

export default CustomButton;

import React, { Component } from 'react';
import {ScrollView, View, TouchableOpacity, Text, StyleSheet, Dimensions, Image} from 'react-native';
import SearchPanel from '../components/SearchPanel';
import Person from '../../assets/images/person.jpg';

const { width } = Dimensions.get('window');

class Shop extends Component {

    renderBtn = (text, style) => {
        return (
            <TouchableOpacity style={[style, styles.btnWrapper]}>
                <Text style={styles.btnText}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    };

    renderText = (text, textColor) => {
        return (
            <View style={styles.descriptionContainer}>
                <Text style={[styles.text, textColor]}>{text}</Text>
            </View>
        )
    };

    render() {
        const food = 'таки да еда';
        const foodText = 'В данном разделе Вы можете найти продуктовые товары is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s';
        const goods = 'мама мыла раму';
        const goodsText = 'В данном разделе Вы можете найти товары для дома is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s';

        return (
            <ScrollView
                style={styles.homeWrapper}
                contentContainerStyle={styles.homeContentWrapper}
            >
                <SearchPanel />
                {this.renderBtn(food, styles.foodContainer)}
                {this.renderText(foodText, styles.textGreen)}
                {this.renderBtn(goods, styles.goodsContainer)}
                {this.renderText(goodsText, styles.textRed)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    homeWrapper: {
        flex: 1
    },
    homeContentWrapper: {
        alignItems: 'center',
    },
    btnWrapper: {
        width: width * 0.6,
        height: 65,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    foodContainer: {
        backgroundColor: 'darkgreen'
    },
    goodsContainer: {
        backgroundColor: 'darkred'
    },
    btnText: {
        color: 'lightyellow',
        fontSize: 22,
        textTransform: 'capitalize'
    },
    descriptionContainer: {
        flexDirection: 'row',
        width: width * 0.9,
        marginTop: 20,
        marginBottom: 30,
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingVertical: 10,
        backgroundColor: 'rgba(142, 142, 147, 0.1)',
        borderRadius: 10
    },
    text: {
        fontSize: 12
    },
    textGreen: {
        color: 'darkgreen'
    },
    textRed: {
        color: 'darkred'
    }
});

export default Shop;

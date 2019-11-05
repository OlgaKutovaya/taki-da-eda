import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    sliderContainer: {
        width: width * 0.9,
    },
    itemContainer: {
        marginRight: 10,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'rgba(142, 142, 147, 0.2)',
    },

    horizSliderHeader: {
        marginBottom: 20,
    },
    itemImage: {
        width: 140,
        height: 160,
        marginBottom: 10,
    },
    productName: {
        fontSize: 18,
        marginLeft: 7,
        marginBottom: 3,
        color: palette.tamarillo,
    },
    productPrice: {
        fontSize: 15,
        marginLeft: 7,
        marginBottom: 10,
        color: palette.zuccini,
    },
});
